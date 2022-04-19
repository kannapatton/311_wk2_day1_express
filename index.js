
const express = require('express');
const bodyParser = require('body-parser')
//control+C to stop app and npm start to start again
const app = express(); //instance of express (instantiate)

const port = process.env.PORT || 4000 //

const { users } = require('./state')

/* BEGIN - create routes here */
//every route has a verb, path, and instructions on what to do
// app.get("/users", function(){});
//                      callback has request(req) and response(res)
//get all users 
app.get("/users", function(req, res) {
  //let input = res.params.name;
  //res.send("hi");
  res.json(users);
});
// get first user from array of users
app.get("/users/1",function(req, res){
  res.json(users[0]);
});

// post a user
app.post("/users", function(req, res) {
  users.push({
    "_id": users.length+1,
    "name": 'Princess Buttercup',
    "occupation": 'Princess',
    "avatar": 'https://akns-images.eonline.com/eol_images/Entire_Site/2017825/rs_1024x759-170925133252-1024-princess-bride-anniversary.jpg?fit=around%7C1024:759&output-quality=90&crop=1024:759;center,top'
  });

  res.json(users[users.length-1]);

});
// put(update) a user
app.put("/users/1", function(req, res) {
  res.json(users[0].name = "John Doe");
});

// delete users/1
app.delete("/users/1", function (req, res){
  res.send('deleted');
});

//part 2
app.use(bodyParser.json());

app.post("users/:userId", function(req, res){
  const id = req.params.id;

  let newUser = {
    "_id": id,
    "name": req.body,
    "occupation": req.body,
    "avatar": req.body
  }
  users.push(newUser);
  res.send(newUser);
});

app.put("users/:userId", function(req, res){
  const id = req.params.id;
  res.json(users[id].occupation = "Project Manager");
});
app.get("users/:userId", function(req, res){
  const id = req.params.id;
  res.send(user[id]);
});
//part 3
app.get("/users/:userId", function (req, res){
  res.send(req.headers);
});
app.put("/users/:userId", function(req, res){
  res.json("Postman");
});
app.delete("/users/:userId", function(req, res){
  res.send("deleted");
});

/* END - create routes here */

app.listen(port, () => 
  console.log(`Example app listening on port ${port}!`))