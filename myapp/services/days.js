'use strict';

var schema = require('../schemas/Days'),
    BaseService = require('./baseService');

module.exports = new BaseService(schema);
