'use strict';

var schema = require('../schemas/Teachers'),
    BaseService = require('./baseService');

module.exports = new BaseService(schema);
