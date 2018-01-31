//require model here

function list(req, res, next) {
    res.send("this is a list");
}

function load(req, res, next, id) {
    res.send("the ID you passed was: " + id);
    res.send("this would return an result from searching the DB by the ID passed");
}

function get(req, res){
    req.send("get request for test")
}

module.exports.list = list;
module.exports.load = load;
module.exports.get = get;

/*
import Post from '../models/post.model';


function load(params) {
  return Post.get(params.id);
}

function get(req, res) {
  return res.json(req.post);
}

function create(params) {
  const post = new Post({
    title: params.data.title,
    content: params.data.content
  });
  return post.save();
}

function update(params) {
  return load(params).then(post => {
    const tmp = post;
    post.title = params.data.title;
    post.content = params.data.content;
    return post.save()
  });
}

function list(params) {
  const { limit = 50, skip = 0 } = params;
  return Post.list({ limit, skip })
}

function remove(params) {
  return load(params).then(post => post.remove());
}

export default { load, get, create, update, list, remove };
*/
