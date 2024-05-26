var express = require('express')
var router = express.Router();
var controller = require('./analytics.controller')

router.post('/trackclicks', controller.trackClicks);
router.get('/getclicks', controller.getClicks);

module.exports = router;