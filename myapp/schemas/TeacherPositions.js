'use strict';
//TODO: get rid of _id
//TODO: validation added

var mongoose = require('mongoose'),
    Fasade = new require('../db/fasade'),
    teachersPositions = mongoose.Schema({
        id: Number,
        name: String,
        shortName: String
    });

teachersPositions.statics.setDefaultData = (positions) => {
    var promises = positions.map(item => {
            let temp = new teachersPositions(item);

            return temp.save;
        }),
        fasade = new Fasade('DepTools');


    return new Promise((resolve, reject) => {
        fasade.connect().then(() => {
            Promise.all(promises.map(item => item()))
                   .then(fasade.closeConnection);
        });
    });
};

module.exports = mongoose.model('TeacherPositions', teachersPositions);

