'use strict';
//TODO: get rid of _id
//TODO: validation added

var mongoose = require('mongoose'),
    Fasade = require('../db/fasade'),
    teachersPositions = mongoose.Schema({
        id: Number,
        name: String,
        shortName: String
    }),
    TeacherPositions;

teachersPositions.statics.setDefaultData = (positions) => {
    var fasade = new Fasade('DepTools'),
        models = positions.map(item => new TeacherPositions(item));

    return new Promise((resolve, reject) => {
        fasade.connect()
            .then(() => {
                return TeacherPositions.remove();
            })
            .then(() => {
                return Promise.all(models.map(item => item.save()));
            })
            .then((resultData) => {
                resolve(resultData);
            })
            .then(() => {
                return fasade.closeConnection();
            });
    });
};

teachersPositions.statics.getData = () => {
    var fasade = new Fasade('DepTools');

    return new Promise((resolve, reject) => {
        fasade.connect()
            .then(() => {
                return TeacherPositions.find();
            })
            .then((resultData) => {
                resolve(resultData);
            })
            .then(() => {
                return fasade.closeConnection();
            })
            .catch(err => {
                return fasade.closeConnection();
            })
            .then(err => {
                reject(err);
            });
    });
};

teachersPositions.statics.addNew = (position) => {
    console.log(position);
    position.id = Date.now();
    var data = new TeacherPositions(position),
        fasade = new Fasade('DepTools');

    return new Promise((resolve, reject) => {
        fasade.connect()
            .then(() => {
                return data.save();
            }).then(newPosition => {
                resolve(newPosition);
            }).then(() => {
                return fasade.closeConnection();
            }).catch(err => {
                return fasade.closeConnection();
            }).then((err) => {
                reject(err);
            });
    });
};

TeacherPositions = mongoose.model('TeacherPositions', teachersPositions);
module.exports = TeacherPositions;
