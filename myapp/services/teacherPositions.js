'use strict';

var schema = require('../schemas/TeacherPositions'),
    data = require('../reset/data/teacherPositions');


class teacherPositionsService {
    setDefaultData() {
        return new Promise((resolve, reject) => {
            schema.setDefaultData(data).then(() =>{
                resolve();
            });
        });
    }
}

module.exports = teacherPositionsService;