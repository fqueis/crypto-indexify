'use strict'

require('dotenv').config()

const indicators    = require('./helpers/indicators')
const functions     = require('./utils/functions')
const geckoApi      = require('coingecko-api')
const logger        = require('./utils/logger')

const boot = async () => {
    const gecko = new geckoApi(), vs_currency = process.env.VS_CURRENCY.toLowerCase()

    logger.info(`vs_currency setted to '${vs_currency}'`)

    let indexify = []
    await gecko.coins.markets({ order: geckoApi.ORDER.MARKET_CAP_DESC, vs_currency }).then(async ({ data }) => {
        const markets = data.filter((d) => !process.env.EXCLUDED_MARKETS.includes(d.symbol)).map((m) => ({ id: m.id, name: m.name})).slice(0, process.env.TOTAL_MARKETS)

        logger.info(`Markets sucessfully fetched. Using a total of ${markets.length} markets`)

        await functions.asyncForEach(markets, async ({ id, name }) => {
            const period = process.env.WMA_PERIOD

            logger.info(`Adjusting market cap of ${name} using a ${period}-day weighted moving average`)
            await gecko.coins.fetchMarketChart(id, { vs_currency, days: period, interval: 'daily' }).then(async ({ data }) => {
                const { market_caps } = data, mcap = market_caps.map((m) => m[1]), wma = await indicators.wma(mcap, period)

                indexify.push({ name, mcap: { val: mcap[mcap.length - 1], wma: wma[wma.length - 1] } })
            })
        })

        logger.info(`All market caps adjusted... Indexing markets now`)
    })

    const ourMarketCap = indexify.reduce((p, c) => p + Math.sqrt(c.mcap.wma), 0)

    let allocations = []
    for (let idx = 0; idx < indexify.length; idx++) {
        const { name:coin, mcap } = indexify[idx], adj = Math.sqrt(mcap.wma), ratio = (adj / ourMarketCap) * 100
        
        allocations.push({ coin, mcap, ratio })
    }

    const file = `./indexed/${Date.now()}_${process.env.TOTAL_MARKETS}M_${process.env.WMA_PERIOD}DWMA.json`

    functions.writeResults(file, allocations, (err) => {
        const message = err ? `An error happened. Message: ${err.message}` : `Markets sucessfully indexed. Check ${file} to see the results`
        
        logger.info(message)

        process.exit()
    })
}

boot().catch(console.error)