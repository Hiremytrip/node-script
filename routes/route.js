'use strict';

var analyticsController = require('../controllers/analytics')

var router = function(app) {
    app.use('/', require('../controllers/index'));
    app.use('/analytics', require('../controllers/analytics'));
}

module.exports = router;