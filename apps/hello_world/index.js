var alexa = require('alexa-app');

// Allow this module to be reloaded by hotswap when changed
module.change_code = 1;

// Define an alexa-app
var app = new alexa.app('hello_world');
app.id = require('./package.json').alexa.applicationId;

app.launch(function(req, res) {
  console.log("in launch");
  res.say("Hello World!!");
  res.shouldEndSession(false);
  console.log(res);
});

app.intent('NameIntent', {
  "slots": { "NAME": "LITERAL", "AGE": "NUMBER" },
  "utterances": ["{My name is|my name's} {matt|bob|bill|jake|nancy|mary|jane|NAME} and I am {1-100|AGE}{ years old|}"]
}, function(req, res) {
  console.log("in NameIntent");
  res.say('Your name is ' + req.slot('NAME') + ' and you are ' + req.slot('AGE') + ' years old');
  res.shouldEndSession(false);
  console.log(res);
});

app.intent('AgeIntent', {
  "slots": { "AGE": "NUMBER" },
  "utterances": ["My age is {1-100|AGE}"]
}, function(req, res) {
  console.log("in AgeIntent");
  res.say('Your age is ' + req.slot('AGE'));
  res.shouldEndSession(false);
  console.log(res);
});

app.intent('VactionIntent', function(req, res) {
  console.log("in VactionIntent");
  res.say('You are on vacation!');
  console.log(res);
});

module.exports = app;
