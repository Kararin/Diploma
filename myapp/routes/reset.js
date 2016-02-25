'use strict';

var express = require('express'),
    router = express.Router(),
    service = require('../services/reset');

router.get('/', function(req, res, next) {
    service.setDefaultData()
        .then((data) => {
            console.log('reset: set default data correctly');
            res.send(data);
        }, err => {
            console.log('reset: set default data failed');
            res.sendStatus(500).send(err);
        });
});

module.exports = router;
