'use strict'

const fs = require('fs')

module.exports = {
    asyncForEach: async (array, callback) => {
        for (let index = 0; index < array.length; index++)
            await callback(array[index], index, array);
    },
    writeResults: async (file, content, callback) => fs.writeFile(file, JSON.stringify(content, null, 2), callback)
}