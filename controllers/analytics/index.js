var express = require('express')
var router = express.Router();
var controller = require('./analytics.controller')

router.post('/trackclicks', controller.trackClicks);
router.post('/getclicks', controller.getClicks);
router.get('/proxy/:ip', controller.getProxy);

module.exports = router;