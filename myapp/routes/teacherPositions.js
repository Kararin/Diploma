'use strict';

var express = require('express'),
    router = express.Router(),
    TeacherPositions = require('../schemas/TeacherPositions'),
    Fasade = require('../db/fasade');

//TODO: db name in separate file
router.get('/', function(req, res, next) {
    let fasade = new Fasade('DepTools');

    fasade.connect().then(() => {
        TeacherPositions.find((err, data) => {
            if (err) {
                console.error(err);
                res.status(500).send('teacherPositions table error');
            } else {
                console.log('teacherPositions find correctly');
                res.send(data);
            }
        });
    });
});

module.exports = router;
