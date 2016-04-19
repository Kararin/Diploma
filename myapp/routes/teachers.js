'use strict';

var express = require('express'),
    router = express.Router(),
    servise = require('../services/teachers');

router.get('/', function(req, res, next) {
    servise.getData()
        .then(data => {
            console.log('teacher finded correctly');
            res.send(data);
        }, error => {
            console.error('teacher finded failed');
            res.sendStatus(500).send(error);
        });
});

router.post('/new', (req, res, next) => {
    servise.addNew(req.body)
        .then(newTeacher => {
            console.log('new teacher added successfully');
            res.send(newTeacher);
        })
        .catch(error => {
            console.error('new teacher added failed');
            res.sendStatus(500).send(error);
        });
});

router.delete('/delete:id', (req, res, next) => {
    servise.delete(req.params.id)
        .then(deletedTachwe => {
            console.log('teacher deleted successfully');
            res.send(deletedTachwe);
        })
        .catch(error => {
            console.error('teacher deleted failed');
            res.sendStatus(500).send(error);
        });
});

router.post('/edit', (req, res, next) => {
    servise.edit(req.body)
        .then(editedTeacher => {
            console.log('teacher edited successfully');
            res.send(editedTeacher);
        })
        .catch(error => {
            console.error('teacher edited failed');
            res.sendStatus(500).send(error);
        })
});

module.exports = router;
