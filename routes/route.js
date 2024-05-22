'use strict';

var analyticsController = require('../controllers/analytics')

var router = function(app) {
    app.use('/', require('../controllers/index'));
    app.use('/analytics', analyticsController);
}

module.exports = router;