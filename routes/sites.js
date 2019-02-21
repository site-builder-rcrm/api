var express = require('express')
var router = express.Router();

router.get('/', function (req, res) {
    res.json({
        items: [{
            id: 'whatever'
        }]
    })
})

router.get('/:siteid', function (req, res) {
    res.json({
        id: req.params.siteid
    })
})

module.exports = router;