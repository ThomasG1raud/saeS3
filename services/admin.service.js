const fs = require('fs')

const getAdmin = (callback) => {
    try {
        return callback();
    } catch (e) {
        return callback([])
    }
}