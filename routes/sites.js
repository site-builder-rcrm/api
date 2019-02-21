var express = require('express')
var router = express.Router();

router.get('/', function (req, res) {
    res.send('Get a list of sites!')
})

router.get('/:siteid', function (req, res) {
    res.send('Get site by id: ' + req.params.siteid);
})

module.exports = router;