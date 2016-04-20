'use strict';

var TeacherPositions = require('../schemas/TeacherPositions'),
    Teachers = require('../schemas/Teachers'),
    Days = require('../schemas/Days'),
    teacherPositionsData = require('../defaultData/teacherPositions'),
    teachersData = require('../defaultData/teachers'),
    daysData = require('../defaultData/days');

class reset {
    setDefaultData() {
        var promises = [
            TeacherPositions.setDefaultData(teacherPositionsData),
            Teachers.setDefaultData(teachersData),
            Days.setDefaultData(daysData)
        ];

        return Promise.all(promises);
    }
}

module.exports = new reset();