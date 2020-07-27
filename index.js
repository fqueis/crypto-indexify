'use strict'

require('dotenv').config()

const { mapValues, groupBy, last }  = require('lodash')
const { asyncForEach }              = require('./utils/functions')
const { ema }                       = require('./helpers/indicators')
const coinGecko                     = require('coingecko-api')
const moment                        = require('moment')

const blackMarkets = process.env.BLACKLIST_MARKETS, maxMarkets = process.env.MAX_MARKETS, currency = process.env.CURRENCY.toLowerCase()

let start = process.hrtime()
const boot = async () => {
    const geckoClient = new coinGecko()

    let markets = await geckoClient.coins.markets({ vs_currency: currency, order: coinGecko.ORDER.MARKET_CAP_DESC, per_page: maxMarkets + blackMarkets.length })

    if (markets.success) {
        const from = moment().subtract(process.env.EMA_PERIOD, 'day').startOf('day').unix(), to = moment().endOf('day').unix()

        let filteredMarkets = markets.data.filter((m) => !blackMarkets.includes(m.symbol.toUpperCase())).slice(0, maxMarkets).map((m) => m.id)

        let topMarkets = []
        await asyncForEach(filteredMarkets, async (id) => {
            let range = await geckoClient.coins.fetchMarketChartRange(id, { vs_currency: currency, from, to })

            let mCapByDay   = mapValues(groupBy(range.data.market_caps, ([unix]) => moment(unix).startOf('day').format()), (cap) => last(cap)[1]),
                mCapEma     = await ema(Object.values(mCapByDay))

            topMarkets.push({ id, marketCapEma: last(mCapEma) })
        })

        let totalMCap = topMarkets.reduce((acc, market) => acc + Math.sqrt(market.marketCapEma), 0)

        let allocations = []
        for (let index = 0; index < topMarkets.length; index++) {
            const market = topMarkets[index];
            
            allocations.push({
                'market': market.id,
                'marketCap': market.marketCapEma,
                "ratio": Math.sqrt(market.marketCapEma) / totalMCap
            })
        }

        allocations.sort((a, b) => (b.ratio > a.ratio) ? 1 : -1).forEach((allocation) => {
            console.log(`${allocation.market} => ${allocation.ratio * 100}%`) 
        })

        console.log(allocations.reduce((acc, alloc) => acc + (alloc.ratio * 100), 0))
    }
}

process.on('beforeExit', () => {
    let end = process.hrtime(start)
    
    console.log(`${end[0]}s ${end[1] / 1000000}ms`)
})

boot().catch((err) => console.log(err))