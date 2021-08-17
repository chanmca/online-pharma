var express = require('express');
var path = require('path');// to work with file system
var bodyParser = require('body-parser');
var port = 8000;
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// get API to home page 
var indexApi = require('./services/index.services');
app.use('/', indexApi);

var userApi = require('./services/user.services');
app.use('/api', userApi);

var inventApi = require('./services/invent.services');
app.use('/api', inventApi);

var orderApi = require('./services/order.services');
app.use('/api', orderApi);

var prescripApi = require('./services/prescrip.services');
app.use('/api', prescripApi);

var detailsApi = require('./services/details.services');
app.use('/api', detailsApi);

//view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// it will make client as root folder
app.use(express.static(path.join(__dirname, 'client')));

app.listen(port, function () {
    console.log('hi, pharmaApp is listening at port 8000');
})