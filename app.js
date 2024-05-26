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

app.use(cors());
app.use(morgan('common'));

app.get('/', function(req, res) {
    res.send('Welcome to the homepage');
});

routes(app);

// connect database mysql
connectDB();

var port = process.env.PORT || 3000;

app.listen(port, (err) => {
    if (err) {
        console.log('Error on listening');
    } else {
        console.log('Listening on port 3000');
    }
})
