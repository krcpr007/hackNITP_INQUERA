const express = require("express");
const app = express();
require("./db/config");
const User = require("./models/User");
const cors = require("cors");
const Polls = require("./models/Polls");
const Answers = require("./models/Answers");
console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());
app.get("/", (req, resp) => {
  resp.send("App is Working");
});
// Create a new user
app.post("/register", async (req, resp) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return resp
        .status(400)
        .json({
          success,
          error: "Sorry a user with this email already exists",
        });
    }
    newUser = new User(req.body);
    let result = await newUser.save();
    result = result.toObject();
    if (result) {
      delete result.password;
      resp.send(req.body);
      console.log(result);
    }
  } catch (e) {
    resp.send("Something Went Wrong");
  }
});
//   login existed user
app.post("/login", async (req, resp) => {
  try {
    if (req.body.password && req.body.email) {
      let user = await User.findOne(req.body).select("-password");
      if (user) {
        resp.send(user);
      } else {
        resp.send({ result: "No user found" });
      }
    } else {
      resp.send({ result: "No user found" });
    }
  } catch (error) {
    resp.send({ result: "No user found" });
  }
});

// api for add new Query
app.post("/create-query", async (req, resp) => {
  try {
    let poll = new Polls(req.body);
    let result = await poll.save();
    resp.send(result);
  } catch (error) {
    resp.send("Error");
  }
});
// all Query available on database
app.get("/all-query", async (req, resp) => {
  let polls = await Polls.find({});
  if (polls) {
    resp.send(polls);
  } else {
    resp.send({ result: "Doesn't Have data" });
  }
});
// get all yours answers

// answering the Query
app.post("/answering", async (req, resp) => {
  try {
    let answer = new Answers(req.body);
    let result = await answer.save();
    resp.send(result);
  } catch (error) {
    resp.send("Error");
  }
  
});
app.get('/polls/:id', async(req,resp)=>{
  try {
    let polls = await Polls.findById({_id:req.params.id});
    resp.send(polls);
  } catch (error) {
    console.log(error);
    resp.send({result:"not found"});
  }
})
app.get('/answers/:id', async(req, resp)=>{
  try {
    let answers = await Answers.find({queryId:req.params.id})
    if(answers){

      resp.send(answers); 
    }else{
      resp.send({result:"not found"}); 
    }
  } catch (error) {
    console.log(error); 
    
  }
})
app.post('/yours-query', async(req,resp)=>{
  try {
    let yourQuery = await Polls.find(req.body)
    if(yourQuery){
      resp.send(yourQuery); 
    }
  } catch (error) {
    
  }
})
app.listen(5000);
