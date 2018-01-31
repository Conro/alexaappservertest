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




//var mongoDB = 'mongodb+srv://testaccount:12345@testcluster-h2vrz.mongodb.net/testdb';

var mongoDB = "mongodb://testaccount:12345@testcluster-shard-00-00-h2vrz.mongodb.net:27017,testcluster-shard-00-01-h2vrz.mongodb.net:27017,testcluster-shard-00-02-h2vrz.mongodb.net:27017/test?ssl=true&replicaSet=testCluster-shard-0&authSource=admin";

mongoose.connect(mongoDB, function(err, client) {
  // Check error in initial connection. There is no 2nd param to the callback.
  if(err){
    console.log("error connectiong to db");
    process.exit(1);
  }
  else {
    console.log("connection made");
  }
});
/*
mongoose.connect(mongoDB,function(err, client){
  if(err){
    console.log("error connectiong to db");
  }
  else {
    console.log("connection made");
    //mongoose.Promise = global.Promise;
    const db = client.db("testdb");
    //db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  }
}, {
  useMongoClient: true
});*/
//mongoose.Promise = global.Promise;
//var db = mongoose.connection;
//db.on('error', console.error.bind(console, 'MongoDB connection error:'));

/*
var url = "mongodb://localhost:27017/node-demo";
mongoose.connect(url);*/


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
