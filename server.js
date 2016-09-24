var Request = require('request');
var Link = require('react-router').Link;

var express = require('express');
var bodyParser = require("body-parser");

//mongoose to handle mongodb
var mongoose = require('mongoose');
//for routing in reacat
var axios = require('axios');
var helpers =require('./app/utils/helpers.js');

//creating an instance of express
var app = express();
var PORT = process.env.PORT || 3000; //assigning the port or env var

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api + json"}));

//allows access to the public folder
app.use(express.static('./public'));

// Main Route. This route will redirect to our rendered React application
app.get('/', function(req, res){
  res.sendFile('./public/index.html');
});

//create db connection

//database connected to GIPHY
mongoose.connect('mongodb://localhost/giphy');
mongoose.Promise = global.Promise;
//heroku uri
// MONGODB_URI: mongodb://heroku_4xh1356q:b39vpthfjhkfep6omg04002pu1@ds019876.mlab.com:19876/heroku_4xh1356q
// var mongooseURI =  'mongodb://heroku_4xh1356q:b39vpthfjhkfep6omg04002pu1@ds019876.mlab.com:19876/heroku_4xh1356q';
// mongoose.connect(mongooseURI);
// mongoose.Promise = global.Promise;

var db = mongoose.connection;

//process.env.MONGODB_URI;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function callback() {

	console.log('mongoose connection successful');


});



//app gets and posts go here
var SavedGifs = require('./models/SavedGifs');





app.listen(PORT, function() {
	//confirms app is listening and server is running
	console.log("listening on port %d", PORT);
});