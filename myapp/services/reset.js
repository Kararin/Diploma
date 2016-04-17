'use strict';

var TeacherPositions = require('../schemas/TeacherPositions'),
    Teachers = require('../schemas/Teachers'),
    teacherPositionsData = require('../defaultData/teacherPositions'),
    teachersData = require('../defaultData/teachers');

class reset {
    setDefaultData() {
        var promises = [
            TeacherPositions.setDefaultData(teacherPositionsData),
            Teachers.setDefaultData(teachersData)
        ];

        return Promise.all(promises);
    }
}

module.exports = new reset();