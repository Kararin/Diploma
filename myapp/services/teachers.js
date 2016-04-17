'use strict';

var schema = require('../schemas/Teachers');


class teachersService {
    getData() {
        return new Promise((resolve, reject) => {
            schema.getData()
                .then(resolve, reject);
        });
    }

    addNew(teacher) {
        console.log(teacher);
        return new Promise((resolve, reject) => {
            schema.addNew(teacher)
                .then(resolve, reject);
        });
    }

    delete(id) {
        return new Promise((resolve, reject) => {
            schema.delete(id)
                .then(resolve, reject);
        });
    }

    edit(teacher) {
        return new Promise((resolve, reject) => {
           schema.edit(teacher).
                then(resolve, reject);
        });
    }
}

module.exports = new teachersService();
