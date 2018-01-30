//var mongoose = require('mongoose')
//, User = mongoose.model('User');
var User = require('./models/user');
var bodyParser = require('body-parser');


module.exports = function(express,alexaAppServerObject) {

    express.use(bodyParser.json());
    express.use(bodyParser.urlencoded({ extended: true }));

	express.post("/addname", (req, res) => {

        var myData = new User(req.body);
        console.log(req.body);
        myData.save()
            .then(item => {
                res.send("Name saved to database");
            })
            .catch(err => {
                res.status(400).send("Unable to save to database");
            });
    });
};