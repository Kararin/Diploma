'use strict';

var schema = require('../schemas/TeacherPositions');

class teacherPositionsService {
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
        console.log(position);
        return new Promise((resolve, reject) => {
           schema.edit(position).
                then(resolve, reject);
        });
    }
}

module.exports = new teacherPositionsService();
