'use strict';

var mongoose = require('mongoose'),
    Fasade = require('../db/fasade'),
    Base = require('../db/basic'),
    teachersPositions = mongoose.Schema({
        id: Number,
        name: String,
        shortName: String
    });

module.exports = new Base(teachersPositions, 'TeacherPositions');
