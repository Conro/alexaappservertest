var AlexaAppServer = require("alexa-app-server");
var PORT = process.env.PORT || 8080;
var mongoose = require("mongoose");


/*
var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb+srv://conor1123:test123@testcluster-h2vrz.mongodb.net/test";
MongoClient.connect(uri, function(err, client) {
   if(err){
     console.log("error connectiong to db");
   }
   else {
     console.log("connection made");
   }
});*/


/*

var mongoDB = 'mongodb+srv://conor1123:test123@testcluster-h2vrz.mongodb.net/test';
mongoose.connect(mongoDB, {
  useMongoClient: true
});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));*/


var url = "mongodb://localhost:27017/node-demo";
mongoose.connect(url);


AlexaAppServer.start({
  server_root: __dirname,
  port: PORT,
  // Use preRequest to load user data on each request and add it to the request json.
  // In reality, this data would come from a db or files, etc.
  preRequest: function(json, req, res) {
    console.log("preRequest fired");
    json.userDetails = { "name": "Bob Smith" };
  },
  // Add a dummy attribute to the response
  postRequest: function(json, req, res) {
    json.dummy = "text";
  }
});
