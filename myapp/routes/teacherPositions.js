'use strict';

var express = require('express'),
    router = express.Router(),
    servise = require('../services/teacherPositions');

//TODO: db name in separate file
router.get('/', function(req, res, next) {
    servise.getData()
           .then(data => {
                console.log('teacher positions finded correctly');
                res.send(data);
           }, error => {
                console.log('teacher positions finded failed');
                res.sendStatus(500).send(error);
           });
});

module.exports = router;
