//import routes from '../routes/index.route';

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var routes = require('./routes/index.route');
var alexa = require("alexa-app");
var PORT = process.env.PORT || 8080;
var mongoose = require("mongoose");


const app = express();
const skillName = "testskill";

// ALWAYS setup the alexa app and attach it to express before anything else.
var alexaApp = new alexa.app(skillName);

alexaApp.express({
  expressApp: app,

  // verifies requests come from amazon alexa. Must be enabled for production.
  // You can disable this if you're running a dev environment and want to POST
  // things to test behavior. enabled by default.
  checkCert: false,

  // sets up a GET route when set to true. This is handy for testing in
  // development, but not recommended for production. disabled by default
  debug: true
});

// now POST calls to /test in express will be handled by the app.request() function

// from here on you can setup any other express routes or middlewares as normal

//MongoDB Connection string
var connString = "mongodb://testaccount:12345@testcluster-shard-00-00-h2vrz.mongodb.net:27017,testcluster-shard-00-01-h2vrz.mongodb.net:27017,testcluster-shard-00-02-h2vrz.mongodb.net:27017/test?ssl=true&replicaSet=testCluster-shard-0&authSource=admin";

mongoose.connect(connString, function(err) {
  // Check error in initial connection. There is no 2nd param to the callback.
  if(err){
    console.log("error connectiong to db");
    process.exit(1);
  }
  else {
    console.log("connection made");
  }
});

//View engine?? Don't know if this will say
app.set("view engine", "ejs");

//Config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Config CORS
app.use(cors());

//Config API endpoint routes.
//Now all other routes
app.use('/api', routes)

//Default landing
app.get('/', function (req, res) {
  res.send('hello world')
})


//LaunchIntent for alexa
alexaApp.launch(function(request, response) {
  //res.send('launched');
  response.say("You launched the app!");
});

alexaApp.dictionary = { "names": ["matt", "joe", "bob", "bill", "mary", "jane", "dawn", "conor"] };

//NameIntent for alexa
alexaApp.intent("nameIntent", {
    "slots": { "NAME": "LITERAL" },
    "utterances": [
      "my {name is|name's} {names|NAME}", "set my name to {names|NAME}"
    ]
  },
  function(request, response) {
    response.say("Success!");
    res.send("success!");
  }
);

//Used for routes not found. Placed at end so it won't disrupt other routes.
app.get('*', (req, res) => {
  //A+ error handling WOW I NEED A COOKIE
  res.send("404 Not found");
});

app.listen(PORT);
console.log("Listening on port " + PORT + ", try http://localhost:" + PORT);
console.log("Skill endpoint: http://localhost:" + PORT + "/" + skillName)
console.log("GLHF");

//---------------
/*
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
/*
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
});*/
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

/*
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
});*/
