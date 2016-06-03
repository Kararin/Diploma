var express = require('express'),
    router = express.Router(),
    service = require('../services/export');

router.post('/html', (req, res, next) => {
    service.exportToHtml(req.body)
        .then(response => {
            res.send(response);
        })
        .catch(error => {
            res.sendStatus(500).send(error);
        });
});

module.exports = router;