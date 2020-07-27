'use strict'

const { indicators } = require('tulind')

const ema = async (marketCap, period = process.env.EMA_PERIOD) => {
    return new Promise((resolve, reject) => indicators.ema.indicator([marketCap], [period]).then((emaResults) => resolve(emaResults[0])).catch(reject))
}

module.exports = { ema }