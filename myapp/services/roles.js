'use strict';

var schema = require('../schemas/Roles'),
    BaseService = require('./baseService');

module.exports = new BaseService(schema);
