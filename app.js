var express = require('express');
var app = express();
var morgan = require('morgan');
var routes = require('./routes/route'); 
var cors = require('cors');
require('dotenv').config();
// var bodyParser = require('body-parser');
var { connectDB } = require('./config/db');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// setup react build folder

app.use(cors());
app.use(morgan('dev'));
var path = require('path');


app.get('/', function(req, res) {
    res.send('Welcome to the homepage');
});

routes(app);

// connect database mysql
connectDB();

// app.use(express.static(path.join(__dirname, 'build')));

// Handles any requests that don't match the ones above
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '/build/index.html'));
// });

var port = process.env.PORT || 3000;

app.listen(port, (err) => {
    if (err) {
        console.log('Error on listening');
    } else {
        console.log('Listening on port 3000');
    }
})
