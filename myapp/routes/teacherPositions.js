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
            console.error('teacher positions finded failed');
            res.sendStatus(500).send(error);
        });
});

router.post('/new', (req, res, next) => {
    servise.addNew(req.body)
        .then(newPosition => {
            console.log('new teacher position added successfully');
            res.send(newPosition);
        })
        .catch(error => {
            console.error('new teacher position added failed');
            res.sendStatus(500).send(error);
        });
});

router.delete('/delete:id', (req, res, next) => {
    servise.delete(req.params.id)
        .then(deletedPosition => {
            console.log('new teacher position added successfully');
            res.send(deletedPosition);
        })
        .catch(error => {
            console.error('new teacher position added failed');
            res.sendStatus(500).send(error);
        });
});

module.exports = router;
