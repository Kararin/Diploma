'use strict';

var express = require('express'),
    router = express.Router(),
    servise = require('../services/users');

router.get('/', function(req, res, next) {
    servise.getData()
        .then(data => {
            console.log('users finded correctly');
            res.send(data);
        }, error => {
            console.error('users finded failed');
            res.sendStatus(500).send(error);
        });
});

router.post('/new', (req, res, next) => {
    console.log(req.body);

    servise.addNew(req.body)
        .then(newPosition => {
            console.log('new user added successfully');
            res.send(newPosition);
        })
        .catch(error => {
            console.error('new user added failed');
            res.sendStatus(500).send(error);
        });
});

router.delete('/delete:id', (req, res, next) => {
    servise.delete(req.params.id)
        .then(deletedPosition => {
            console.log('user deleted successfully');
            res.send(deletedPosition);
        })
        .catch(error => {
            console.error('user deleted failed');
            res.sendStatus(500).send(error);
        });
});

router.post('/edit', (req, res, next) => {
    servise.edit(req.body)
        .then(editedPosition => {
            console.log('user edited successfully');
            res.send(editedPosition);
        })
        .catch(error => {
            console.error('user edited failed');
            res.sendStatus(500).send(error);
        })
});

router.post('/check', (req, res, next) => {
    servise.checkUser(req.body)
    .then(userData => {
        console.log('user exists');
        res.send(userData);
    })
    .catch(error => {
        console.error('user doesnt\'t exist');
        res.sendStatus(500).send(error);
    });
});

module.exports = router;
