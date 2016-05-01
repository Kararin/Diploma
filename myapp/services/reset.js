'use strict';

var TeacherPositions = require('../schemas/TeacherPositions'),
    Teachers = require('../schemas/Teachers'),
    Days = require('../schemas/Days'),
    Schedule = require('../schemas/Schedule'),
    teacherPositionsData = require('../defaultData/teacherPositions'),
    teachersData = require('../defaultData/teachers'),
    daysData = require('../defaultData/days'),
    scheduleData = require('../defaultData/schedule');

class reset {
    setDefaultData() {
        var promises = [
            TeacherPositions.setDefaultData(teacherPositionsData),
            Teachers.setDefaultData(teachersData),
            Days.setDefaultData(daysData),
            Schedule.setDefaultData(scheduleData)
        ];

        return Promise.all(promises);
    }
}

module.exports = new reset();