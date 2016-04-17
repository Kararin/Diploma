'use strict';

var mongoose = require('mongoose'),
    Facade = require('../db/fasade'),
    teachers = mongoose.Schema({
        id: Number,
        name: String,
        lastName: String,
        position: String
    }),
    Teachers;

teachers.statics.addNew = (teacher) => {
    teacher.id = Date.now();
    var data = new Teachers(teacher),
        fasade = new Facade('DepTools');

    return new Promise((resolve, reject) => {
        fasade.connect()
            .then(() => {
                return data.save();
            }).then(newTeacher => {
                resolve(newTeacher);
            }).then(() => {
                return fasade.closeConnection();
            }).catch(err => {
                return fasade.closeConnection();
            }).then((err) => {
                reject(err);
            });
    });
};

teachers.statics.getData = () => {
    var fasade = new Facade('DepTools');

    return new Promise((resolve, reject) => {
        fasade.connect()
            .then(() => {
                return Teachers.find();
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

Teachers = mongoose.model('Teachers', teachers);
module.exports = Teachers;