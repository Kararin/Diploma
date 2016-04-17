'use strict';
var mongoose = require('mongoose');

class Fasade {
    constructor(dbName) {
        this.dbName = dbName,
        this.db = null;
    }

    connect(resolve, reject) {
        return new Promise((resolve, reject) => {
            var connection = mongoose.createConnection('mongodb://localhost/' + this.dbName);
            this.db = connection;

            this.db.on('error', err => {
                console.log(err);
                reject(err);
            });

            this.db.once('open', () => {
                console.log('database connection correctly');
                resolve(connection);
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