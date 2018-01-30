var AlexaAppServer = require("alexa-app-server");
var PORT = process.env.PORT || 8080;

var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb+srv://conor1123:test123@testcluster-h2vrz.mongodb.net/test";
MongoClient.connect(uri, function(err, client) {
   if(err){
     console.log("error connectiong to db");
   }
   else {
     console.log("connection made");
   }
});

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
