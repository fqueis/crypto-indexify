'use strict'

const { createLogger, format, transports } = require('winston')

const { combine, timestamp, printf } = format

const custom = printf(({ level, message, timestamp }) => `[${timestamp}] ${level}: ${message}`);

const logger = createLogger({
    transports: [ new transports.Console({ handleExceptions: true, format: combine(timestamp(), custom) }) ]
})

module.exports = logger