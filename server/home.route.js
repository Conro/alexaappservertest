module.exports = function(express,alexaAppServerObject) {
	express.use('/',function(req,res) {
        res.sendFile("../public_html/index.html");
	});
};