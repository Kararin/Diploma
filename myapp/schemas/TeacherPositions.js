'use strict';
//TODO: get rid of _id
var mongoose = require('mongoose'),
    teachersPositions = mongoose.Schema({
        id: Number,
        name: String,
        shortName: String
    });

module.exports = mongoose.model('TeacherPositions', teachersPositions);

