// DEPNDENCIES
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');

// LOCAL IMPORTS
var SightingCtrl = require('./api/controllers/SightingCtrl');

// SERVER
var app = express();
var data = {'message': 'These birds are cool!'};


// MIDDLEWARE - Every single request that comes in goes through middleware first!!!!!
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());


// ENDPOINTS
app.get('/api/birds', SightingCtrl.read);
app.post('/api/birds', SightingCtrl.create);
app.put('/api/birds/:id', SightingCtrl.update);
app.delete('/api/birds/:id', SightingCtrl.delete);


// MongoDB CONNECTION
var port = (process.env.PORT, process.env.IP) || 5050;
var mongoUri = 'mongodb://localhost:27017/miniBirds';

mongoose.set('debug', true);
mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
    console.log('MongoDB connected at: ', mongoUri);
});


// app.listen(port, function() {
//     console.log('I am creepy. I like to watch you...', port);
// });

app.listen(process.env.PORT, process.env.IP);
console.log('I am creepy. I like to watch you...', port);
