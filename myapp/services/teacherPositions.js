'use strict';

var schema = require('../schemas/TeacherPositions'),
    BaseService = require('./baseService');

module.exports = new BaseService(schema);
