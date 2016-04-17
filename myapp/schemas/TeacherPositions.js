'use strict';

var mongoose = require('mongoose'),
    Base = require('../db/basic'),
    teachersPositions = mongoose.Schema({
        id: Number,
        name: String,
        shortName: String
    });


module.exports = new Base(teachersPositions, 'TeacherPositions');
