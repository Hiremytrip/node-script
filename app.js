var express = require('express');
var app = express();
var morgan = require('morgan');
var routes = require('./routes/route'); 
var cors = require('cors');
var bodyParser = require('body-parser');
app.use(cors());

// format logger format
app.use(morgan('common'));

app.use(bodyParser.urlencoded({
    extended: true
}));
  
app.get('/', function(req, res) {
    res.send('Welcome to the homepage');
});

routes(app);

// connect database mysql
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'analytics'
});

connection.connect((err) => {
    if (err) {
        console.log('Error on connecting');
    } else {
        console.log('Connected to database');
    }
});

app.set('connection', connection);
app.set('view engine', 'ejs');

var port = process.env.PORT || 3000;

app.listen(port, (err) => {
    if (err) {
        console.log('Error on listening');
    } else {
        console.log('Listening on port 3000');
    }
})
