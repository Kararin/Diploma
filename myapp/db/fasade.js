'use strict';
var mongoose = require('mongoose');

//TODO: inject mongoose to class
class Fasade {
    constructor(dbName) {
        this.dbName = dbName,
        this.db = null;
    }

    connect(resolve, reject) {
        return new Promise((resolve, reject) => {
            mongoose.connect('mongodb://localhost/' + this.dbName);
            this.db = mongoose.connection;

            this.db.on('error', err => {
                console.log(err);
                reject(err);
            });

            this.db.once('open', () => {
                console.log('database connection correctly');
                resolve();
            });
        });
    }

    closeConnection() {
        return new Promise((resolve, reject) => {
            console.log('database connection closed');
            this.db.close()
                   .then(resolve, reject);
        });
    }
}

module.exports  = Fasade;