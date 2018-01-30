var alexa = require('alexa-app');

// Allow this module to be reloaded by hotswap when changed
module.change_code = 1;

// Define an alexa-app
var app = new alexa.app('hello_world');
app.id = require('./package.json').alexa.applicationId;

app.launch(function(req, res) {
  res.say("Hello World!!");
  res.shouldEndSession(false);
});

app.intent('NameIntent', {
  "slots": { "NAME": "LITERAL", "AGE": "NUMBER" },
  "utterances": ["{My name is|my name's} {matt|bob|bill|jake|nancy|mary|jane|NAME} and I am {1-100|AGE}{ years old|}"]
}, function(req, res) {
  res.say('Your name is ' + req.slot('NAME') + ' and you are ' + req.slot('AGE') + ' years old');
  res.shouldEndSession(false);
});

app.intent('AgeIntent', {
  "slots": { "AGE": "NUMBER" },
  "utterances": ["My age is {1-100|AGE}"]
}, function(req, res) {
  res.say('Your age is ' + req.slot('AGE'));
  res.shouldEndSession(false);
});

app.intent('VactionIntent', function(req, res) {
  res.say('You are on vacation!');
});

module.exports = app;
