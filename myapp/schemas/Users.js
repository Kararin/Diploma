'use strict';

var mongoose = require('mongoose'),
    Base = require('../db/basic'),
    users = mongoose.Schema({
        id: Number,
        name: String,
        password: String,
        role: Number
    });


module.exports = new Base(users, 'Users');