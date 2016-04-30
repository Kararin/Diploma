'use strict';

var mongoose = require('mongoose'),
    Base = require('../db/basic'),
    schedule = mongoose.Schema({
        id: Number,
        {
            teacherId: {
                day: {
                    time: Array
                }
            }
        }
    });


module.exports = new Base(schedule, 'Schedule');
