'use strict';

var schema = require('../schemas/Schedule');

class scheduleService {
    getData() {
        return new Promise((resolve, reject) => {
            schema.getData()
                .then(resolve, reject);
        });
    }

    addNew(schedule) {
        return new Promise((resolve, reject) => {
            schema.addNew(schedule)
                .then(resolve, reject);
        });
    }

    delete(scheduleId) {
        return new Promise((resolve, reject) => {
            schema.delete(scheduleId)
                .then(resolve, reject);
        });
    }

    edit(schedule) {
        return new Promise((resolve, reject) => {
           schema.edit(schedule).
                then(resolve, reject);
        });
    }
}

module.exports = new scheduleService();
