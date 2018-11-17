var express = require('express');
var path = require('path');
var mount = require('mount-routes');
var app = express();

//Set up mysql connection

bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8081;  
console.log('Listening port number: ' + port);

//Set up router
var user = require('./routes/user');

app.use('/api/user', user);

app.listen(port);
console.log('Server is running...');