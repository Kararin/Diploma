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

    getItemsById(itemsIds) {
        var promises = itemsIds.map(item => this.getById(item));

        return new Promise((resolve, reject) => {
            Promise.all(promises)
                .then(resolve)
                .catch(reject);
        });
    }

    getModelBy(object) {
         return new Promise((resolve, reject) => {
            this.schema.getModelBy(object)
                .then(resolve, reject);
        });
    }
}

module.exports = BaseService;