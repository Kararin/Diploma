'use strict';

var mongoose = require('mongoose'),
    Base = require('../db/basic'),
    rights = mongoose.Schema({
        id: Number,
        name: String
    });


module.exports = new Base(rights, 'Rights');