'use strict';

var express = require('express'),
    router = express.Router(),
    servise = require('../services/days');

router.get('/', function(req, res, next) {
    servise.getData()
        .then(data => {
            console.log('days finded correctly');
            res.send(data);
        }, error => {
            console.error('days finded failed');
            res.sendStatus(500).send(error);
        });
});

// router.post('/new', (req, res, next) => {
//     console.log(req.body);

//     servise.addNew(req.body)
//         .then(newPosition => {
//             console.log('new teacher position added successfully');
//             res.send(newPosition);
//         })
//         .catch(error => {
//             console.error('new teacher position added failed');
//             res.sendStatus(500).send(error);
//         });
// });

// router.delete('/delete:id', (req, res, next) => {
//     servise.delete(req.params.id)
//         .then(deletedPosition => {
//             console.log('teacher position deleted successfully');
//             res.send(deletedPosition);
//         })
//         .catch(error => {
//             console.error('teacher position deleted failed');
//             res.sendStatus(500).send(error);
//         });
// });

// router.post('/edit', (req, res, next) => {
//     servise.edit(req.body)
//         .then(editedPosition => {
//             console.log('teacher position edited successfully');
//             res.send(editedPosition);
//         })
//         .catch(error => {
//             console.error('teacher position edited failed');
//             res.sendStatus(500).send(error);
//         })
// });

module.exports = router;
