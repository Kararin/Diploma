'use strict';

var schema = require('../schemas/Users'),
    BaseService = require('./baseService');

module.exports = new BaseService(schema);
