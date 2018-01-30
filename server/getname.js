var User = require('./models/user');

module.exports = function(express,alexaAppServerObject) {
	express.get("/getname", (req, res) => {

        /*
        var users = User.find(function(err, res){
            console.log(res);
        }).then(items =>{
            res.send(users);
        });*/
/*
        User.find().stream()
        .on('data', function(doc){
            res.send(doc);
          // handle doc
        })
        .on('error', function(err){
          // handle error
        })
        .on('end', function(){
           console.log("we are done finding all users");
        });*/
        


        
        User.find({},function(err, users){
            console.log("got dem users");
/*
            var userMap = {};
            
            users.forEach(function(user) {
                userMap[user._id] = user;
            });*/
        
            res.send(users);  

        }).then (items => {
            console.log("done finding users");
            //res.send(users);
        });
        
        /*
        var myData = new User(req.body);
        myData.save()
            .then(item => {
                res.send("Name saved to database");
            })
            .catch(err => {
                res.status(400).send("Unable to save to database");
            });*/
    });
};