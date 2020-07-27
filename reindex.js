'use strict'

require('dotenv').config()

const coinGecko = require('coingecko-api')
const { ema }   = require('./helpers/indicators')

const boot = async () => {
    const geckoClient = new coinGecko()

    let markets = await geckoClient.coins.markets({ vs_currency: 'usd', order: coinGecko.ORDER.MARKET_CAP_DESC })

    if (markets.success) {
        const blackMarkets = process.env.BLACKLIST_MARKETS, maxMarkets = process.env.MAX_MARKETS

        Promise.all(markets.data.filter((m) => !blackMarkets.includes(m.symbol.toUpperCase())).slice(0, maxMarkets).map(async (m) => {
            let prevMCap    = Math.sign(m.market_cap_change_24h) == -1 ? m.market_cap + Math.abs(m.market_cap_change_24h) : (m.market_cap - Math.abs(m.market_cap_change_24h)),
                mCapEma     = await ema([prevMCap, m.market_cap])

            return Promise.resolve({ 'name': m.name, 'marketCap': mCapEma[mCapEma.length - 1] })
        })).then((topMarkets) => {
            let totalMCap = topMarkets.reduce((acc, market) => acc + Math.sqrt(market.marketCap), 0)

            let allocations = []
            for (let index = 0; index < topMarkets.length; index++) {
                const market = topMarkets[index];
                
                allocations.push({
                    'market': market.name,
                    'marketCap': market.marketCap,
                    "ratio": Math.sqrt(market.marketCap) / totalMCap
                })
            }

            allocations.sort((a, b) => (b.ratio > a.ratio) ? 1 : -1).forEach((allocation) => {
                console.log(`${allocation.market} => ${(allocation.ratio * 100).toFixed(2)}%`)
            })
        })
    }
}

boot().catch((err) => console.log(err))