'use strict';
var TeacherPositions = require('../schemas/TeacherPositions'),
    teacherPositionsData = require('./data/teacherPositions');

//TODO: add map
const setTeacherPositions = () => {
    TeacherPositions.remove(() => {
        teacherPositionsData.forEach(positionData => {
            let position = new TeacherPositions(positionData);
            position.save((err, position) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log(position);
                }
            });
        });
    });
};

const setInitialData = () => {
    setTeacherPositions();
};

module.exports = setInitialData;
