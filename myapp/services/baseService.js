'use strict';

class BaseService {
    constructor(schema) {
        this.schema = schema;
    }

    getData() {
        return new Promise((resolve, reject) => {
            this.schema.getData()
                .then(resolve, reject);
        });
    }

    addNew(item) {
        return new Promise((resolve, reject) => {
            this.schema.addNew(item)
                .then(resolve, reject);
        });
    }

    delete(itemId) {
        return new Promise((resolve, reject) => {
            this.schema.delete(itemId)
                .then(resolve, reject);
        });
    }

    edit(item) {
        return new Promise((resolve, reject) => {
            this.schema.edit(item).
                then(resolve, reject);
        });
    }

    getById(itemId) {
        return new Promise((resolve, reject) => {
            this.schema.getById(itemId)
                .then(resolve, reject);
        });
    }
}

module.exports = BaseService;