// DEPNDENCIES
var express = require('express');
var mongojs = require('mongojs');
var bodyParser = require('body-parser');
var cors = require('cors');

// SERVER
var app = express();
var port = (process.env.PORT, process.env.IP) || 5050;


var data = {'message': 'These birds are cool!'};

// MIDDLEWARE - Every single request that comes in goes through middleware first!!!!!
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());

// ENDPOINTS
app.get('/api/birds', function(req, res) {
    res.json(data);
});
app.post('/api/birds', function(req, res) {
    console.log('******* req.body', req.body);
    // console.log('******* res', res);
    res.json(data);
});




// app.listen(port, function() {
//     console.log('I am creepy. I like to watch you...', port);
// });

app.listen(process.env.PORT, process.env.IP);
console.log('I am creepy. I like to watch you...', port);
