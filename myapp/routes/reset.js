'use strict';

var express = require('express'),
    router = express.Router(),
    Fasade = require('../db/fasade');

router.get('/', function(req, res, next) {
    let facade = new Fasade('DepTools');

    facade.setDefaultData();
    res.send(facade.dbName);
});

module.exports = router;
