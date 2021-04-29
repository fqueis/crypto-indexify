'use strict'

const { indicators } = require('tulind')

const ema = async (values, period = process.env.EMA_PERIOD) => {
    return indicators.ema.indicator([values], [period]).then((results) => Promise.resolve(results[0])).catch(Promise.reject)
}

const wma = async (values, period = process.env.WMA_PERIOD) => {
    return indicators.wma.indicator([values], [period]).then((results) => Promise.resolve(results[0])).catch(Promise.reject)
}

module.exports = { ema, wma }