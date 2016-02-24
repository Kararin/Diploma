'use strict';
var TeacherPositions = require('../schemas/TeacherPositions'),
    teacherPositionsData = require('./data/teacherPositions');

//TODO: add map
const setTeacherPositions = () => {
    TeacherPositions.remove((err, data) => {
        console.log('positions removed' +  data);
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

const setInitialData = (resolve) => {
    return new Promise((resolve, reject) => {
        setTeacherPositions();
    });
};

module.exports = setInitialData;
