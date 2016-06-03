'use strict';

var schema = require('../schemas/Schedule'),
    BaseService = require('./baseService');

module.exports = new BaseService(schema);
