'use strict';

var schema = require('../schemas/Days');

class Days {
    getData() {
        return new Promise((resolve, reject) => {
            schema.getData()
                .then(resolve, reject);
        });
    }

    addNew(day) {
        return new Promise((resolve, reject) => {
            schema.addNew(day)
                .then(resolve, reject);
        });
    }

    delete(dayId) {
        return new Promise((resolve, reject) => {
            schema.delete(dayId)
                .then(resolve, reject);
        });
    }

    edit(day) {
        console.log(day);
        return new Promise((resolve, reject) => {
           schema.edit(day).
                then(resolve, reject);
        });
    }
}

module.exports = new Days();
