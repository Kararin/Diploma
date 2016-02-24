'use strict';

var TeacherPositions = require('../services/teacherPositions');

class reset {
    setDefaultData() {
        return new Promise((resolve, reject) => {
            TeacherPositions.setDefaultData().then(() => {
                resolve();
            }, error => {
                reject();
            });
        });
    }

}

module.exports = new reset();