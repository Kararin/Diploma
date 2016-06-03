'use strict';

var mongoose = require('mongoose'),
    Fasade = require('./fasade'),
    dbName = 'DepTools';

class Base {
    constructor(schema, modelName) {
        this.schema = schema;
        this.modelName = modelName;
    }

    getData() {
        var fasade = new Fasade(dbName);
        return new Promise((resolve, reject) => {
            fasade.connect()
                .then(db => {
                    var Model = this.getModel(db);
                    return Model.find();
                })
                .then((resultData) => {
                    resolve(resultData);
                })
                .then(() => {
                    return fasade.closeConnection();
                })
                .catch(err => {
                    return fasade.closeConnection();
                })
                .then(err => {
                    reject(err);
                });
        });
    }

    addNew(dataItem) {
        var fasade = new Fasade(dbName);

        dataItem.id = Date.now();

        return new Promise((resolve, reject) => {
            fasade.connect()
                .then((db) => {
                    var Model = this.getModel(db),
                        data = new Model(dataItem);

                    return data.save();
                }).then(newDataItem => {
                    resolve(newDataItem);
                }).then(() => {
                    return fasade.closeConnection();
                }).catch(err => {
                    return fasade.closeConnection();
                }).then((err) => {
                    reject(err);
                });
        });
    }

    delete(dataItemId) {
        var fasade = new Fasade('DepTools');

        return new Promise((resolve, reject) => {
            fasade.connect()
                .then((db) => {
                    var Model = this.getModel(db);
                    return Model.remove({
                        id: dataItemId
                    });
                }).then((deletedItem) => {
                    resolve(deletedItem);
                }).then(() => {
                    return fasade.closeConnection();
                }).catch(err => {
                    return fasade.closeConnection();
                }).then((err) => {
                    reject(err);
                });
        });
    }

    edit(dataItem) {
        var fasade = new Fasade('DepTools');

        return new Promise((resolve, reject) => {
            fasade.connect()
                .then((db) => {
                    var model = this.getModel(db);

                    return model.findByIdAndUpdate(
                        dataItem._id, dataItem
                    );
                }).then((editedDataItem) => {
                    resolve(editedDataItem);
                }).then(() => {
                    return fasade.closeConnection();
                }).catch(err => {
                    return fasade.closeConnection();
                }).then((err) => {
                    reject(err);
                });
        });
    }

    setDefaultData(dataItems) {
        var fasade = new Fasade('DepTools'),
            models;

        return new Promise((resolve, reject) => {
            fasade.connect()
                .then((db) => {
                    var Model = this.getModel(db);

                    models = dataItems.map(item => new Model(item));
                    return Model.remove();
                })
                .then(() => {
                    return Promise.all(models.map(item => item.save()));
                })
                .then((resultData) => {
                    resolve(resultData);
                })
                .then(() => {
                    return fasade.closeConnection();
                });
        });
    }

    getModel(db) {
        return db.model(this.modelName, this.schema);
    }

    getById(dataItemId) {
        var fasade = new Fasade('DepTools');

        return new Promise((resolve, reject) => {
            fasade.connect()
                .then(db => {
                    var Model = this.getModel(db);

                    return Model.findById(dataItemId);
                }).then(result => resolve)
                .then(() => {
                    fasade.closeConnection();
                }).catch(err => {
                    return fasade.closeConnection();
                }).then((err) => {
                    reject(err);
                });
        });
    }
}

module.exports = Base;