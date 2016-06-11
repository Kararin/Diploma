'use strict';

var express = require('express'),
    router = express.Router(),
    servise = require('../services/roles');

router.get('/', function(req, res, next) {
    servise.getData()
        .then(data => {
            console.log('roles finded correctly');
            res.send(data);
        }, error => {
            console.error('roles finded failed');
            res.sendStatus(500).send(error);
        });
});

module.exports = router;