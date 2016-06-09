'use strict';

var TeacherPositions = require('../schemas/TeacherPositions'),
    Teachers = require('../schemas/Teachers'),
    Days = require('../schemas/Days'),
    Schedule = require('../schemas/Schedule'),
    Users = require('../schemas/Users'),
    Roles = require('../schemas/Roles'),
    Rights = require('../schemas/Rights'),

    teacherPositionsData = require('../defaultData/teacherPositions'),
    teachersData = require('../defaultData/teachers'),
    daysData = require('../defaultData/days'),
    scheduleData = require('../defaultData/schedule'),
    usersData = require('../defaultData/users'),
    rolesData = require('../defaultData/roles'),
    rights = require('../defaultData/rights');

class reset {
    setDefaultData() {
        var promises = [
            TeacherPositions.setDefaultData(teacherPositionsData),
            Teachers.setDefaultData(teachersData),
            Days.setDefaultData(daysData),
            Schedule.setDefaultData(scheduleData),
            Users.setDefaultData(usersData),
            Roles.setDefaultData(rolesData),
            Rights.setDefaultData(rights)
        ];

        return Promise.all(promises);
    }
}

module.exports = new reset();