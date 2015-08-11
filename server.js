// DEPNDENCIES
var express = require('express');
var mongojs = require('mongojs');
var bodyParser = require('body-parser');
var cors = require('cors');

// SERVER
var app = express();
var port = 5050;

// MIDDLEWARE - Every single request that comes in goes through middleware first!!!!!
app.use(bodyParser.json());
app.use(cors());

// ENDPOINTS




// app.listen(port, function() {
//     console.log('I am creepy. I like to watch you...', port);
// });

app.listen(process.env.PORT, process.env.IP);
console.log('I am creepy. I like to watch you...', port);
