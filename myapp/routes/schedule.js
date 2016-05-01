'use strict';

var express = require('express'),
    router = express.Router(),
    servise = require('../services/schedule');

router.get('/', function(req, res, next) {
    servise.getData()
        .then(data => {
            console.log('schedule finded correctly');
            res.send(data);
        }, error => {
            console.error('schedule finded failed');
            res.sendStatus(500).send(error);
        });
});

router.post('/new', (req, res, next) => {
    servise.addNew(req.body)
        .then(scheduleItem => {
            console.log('new schedule item added successfully');
            res.send(scheduleItem);
        })
        .catch(error => {
            console.error('new schedule item added failed');
            res.sendStatus(500).send(error);
        });
});

router.delete('/delete:id', (req, res, next) => {
    servise.delete(req.params.id)
        .then(deletedScheduleItem => {
            console.log('schedule item deleted successfully');
            res.send(deletedScheduleItem);
        })
        .catch(error => {
            console.error('schedule item deleted failed');
            res.sendStatus(500).send(error);
        });
});

router.post('/edit', (req, res, next) => {
    servise.edit(req.body)
        .then(editedScheduleItem => {
            console.log('schedule item edited successfully');
            res.send(editedScheduleItem);
        })
        .catch(error => {
            console.error('schedule item edited failed');
            res.sendStatus(500).send(error);
        });
});

module.exports = router;
