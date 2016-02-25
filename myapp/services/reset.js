'use strict';

var TeacherPositions = require('../services/teacherPositions');

class reset {
    setDefaultData() {
        return new Promise((resolve, reject) => {
            TeacherPositions.setDefaultData().then((data) => {
                resolve(data);
            }, error => {
                reject(error);
            });
        });
    }

}

module.exports = new reset();