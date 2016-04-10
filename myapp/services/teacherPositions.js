'use strict';

var schema = require('../schemas/TeacherPositions'),
    data = require('../reset/data/teacherPositions');


class teacherPositionsService {
    setDefaultData() {
        return new Promise((resolve, reject) => {
            schema.setDefaultData(data).then(data => {
                resolve(data);
            }, reject);
        });
    }

    getData() {
        return new Promise((resolve, reject) => {
            schema.getData()
                .then(resolve, reject);
        });
    }

    addNew(position) {
        return new Promise((resolve, reject) => {
            schema.addNew(position)
                .then(resolve, reject);
        });
    }

    delete(positionId) {
        return new Promise((resolve, reject) => {
            schema.delete(positionId)
                .then(resolve, reject);
        });
    }

    edit(position) {
        return new Promise((resolve, reject) => {
           schema.edit(position).
                then(resolve, reject);
        });
    }
}

module.exports = new teacherPositionsService();
