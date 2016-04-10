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
            console.log('teacher position deleted successfully');
            res.send(deletedPosition);
        })
        .catch(error => {
            console.error('teacher position deleted failed');
            res.sendStatus(500).send(error);
        });
});

router.put('/edit:id', (req, res, next) => {
    servise.edit(req.params.body)
        .then(editedPosition => {
            console.log('teacher position edited successfully');
            res.send(editedPosition);
        })
        .catch(error => {
            console.error('teacher position edited failed');
            res.sendStatus(500).send(error);
        })
});

module.exports = router;
