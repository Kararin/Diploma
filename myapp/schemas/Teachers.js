'use strict';

var mongoose = require('mongoose'),
    Base = require('../db/basic'),
    teachers = mongoose.Schema({
        id: Number,
        name: String,
        lastName: String,
        position: String
    });


module.exports = new Base(teachers, 'Teachers');