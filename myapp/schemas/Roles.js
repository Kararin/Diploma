'use strict';

var mongoose = require('mongoose'),
    Base = require('../db/basic'),
    roles = mongoose.Schema({
        id: Number,
        name: String,
        rights: []
    });

module.exports = new Base(roles, 'Roles');