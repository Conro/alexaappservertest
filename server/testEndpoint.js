module.exports = function(express,alexaAppServerObject) {
	express.use('/test',function(req,res) {
		res.send("test endpoint");
	});
};
