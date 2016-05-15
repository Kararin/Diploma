'use strict';

var mongoose = require('mongoose'),
    Base = require('../db/basic'),
    schedule = mongoose.Schema({
        id: Number,
        teachers: Array,
        name: String,
        dates: Object
    });

module.exports = new Base(schedule, 'Schedule');
