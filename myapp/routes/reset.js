'use strict';

var express = require('express'),
    router = express.Router(),
    service = require('../services/reset');

router.get('/', function(req, res, next) {
    service.setDefaultData()
           .tnen((data) => {
                console.log('reset: set default data correctly');
                res.send(data);
           }, error => {
                console.log('reset: set default data failed');
                res.status(500).send(error);
           });
});

module.exports = router;
