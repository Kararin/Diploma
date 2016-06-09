'use strict';

var schema = require('../schemas/Rights'),
    BaseService = require('./baseService');

module.exports = new BaseService(schema);
