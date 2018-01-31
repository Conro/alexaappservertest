var mongoose = require('mongoose')
, Schema = mongoose.Schema
, ObjectId = Schema.ObjectId;

nameSchema = new Schema({
    firstName: String,
    lastName: String
});

module.exports = mongoose.model('User', nameSchema );

//mongoose.model('User', nameSchema);