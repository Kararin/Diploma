'use strict';

var express = require('express'),
    router = express.Router(),
    servise = require('../services/rights');

router.get('/', function(req, res, next) {
    servise.getData()
        .then(data => {
            console.log('rights finded correctly');
            res.send(data);
        }, error => {
            console.error('rights finded failed');
            res.sendStatus(500).send(error);
        });
});

module.exports = router;
