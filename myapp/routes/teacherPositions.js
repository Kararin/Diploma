'use strict';

var express = require('express'),
    router = express.Router(),
    TeacherPositions = require('../schemas/TeacherPositions'),
    Fasade = require('../db/fasade');

//TODO: db name in separate file
router.get('/', function(req, res, next) {
    var fasade = new Fasade('DepTools');

    fasade.connect()
        .then(() => {
            console.log('finding');
            TeacherPositions.find((err, data) => {
                if (err) {
                    fasade.closeConnection();
                    res.status(500).send('teacherPositions table error');
                }

                fasade.closeConnection();
                console.log('teacher positions finded correctly');
                res.send(data);

            });
        }, error => {
            fasade.closeConnection();
            res.status(500).send(error);
        });

});

module.exports = router;
