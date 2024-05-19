var mysql = require('mysql');

exports.trackClicks = function (req, res) {
    // logged to database table;

    console.log(req.body);
    if (req.body && !req.body.data) {
        res.send("Data required");
        return
    }
    
    res.send("success")
}