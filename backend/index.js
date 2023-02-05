const express = require("express");
const app = express();
require('dotenv').config()
require("./db/config");
const User = require("./models/User");
const cors = require("cors");
const Polls = require("./models/Polls");
const Answers = require("./models/Answers");
app.use(express.json());
const corsOptions = {
  origin: '*',
  credentials: true,            //access-control-allow-credentials:true
  optionSuccessStatus: 200,
}
app.use(cors(corsOptions)) // Use this after the variable declaration
const bcrypt = require('bcryptjs');
const PORT = process.env.PORT || 5000
app.get("/", (req, resp) => {
  resp.send("InQuera App is Working");
});
// Create a new user
app.post("/register", async (req, resp) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return resp.status(400).json({ success: false, Msg: "Email already exists", });
    }
    /// generating password hash
    const salt = await bcrypt.genSalt(10);
    let secPass = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      name: req.body.name,
      password: secPass,
      email: req.body.email,
    });
    let result = await newUser.save();
    result = result.toObject();
    if (result) {
      delete result.password;
      return resp.status(200).json({ _id: result._id.toString(), name: req.body.name, email: req.body.email, success: true, Msg: "Login Successfully" })
    }
  } catch (e) {
    resp.send("Something Went Wrong");
  }
});
//   login existed user
app.post("/login", async (req, resp) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return resp.status(400).json({ Msg: "User not found" });
    }
    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      return resp.status(400).json({ success: false, Msg: "sorry use correct email or password" });
    }
    resp.send(user);
  } catch (error) {
    console.log(error);
    resp.status(400).json({ success: false, Msg: "Something went wrong" });

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
// finding Query 
app.get('/polls/:id', async (req, resp) => {
  try {
    let polls = await Polls.findById({ _id: req.params.id });
    resp.send(polls);
  } catch (error) {
    console.log(error);
    resp.send({ result: "not found" });
  }
})
// finding answer of particular query
app.get('/answers/:id', async (req, resp) => {
  try {
    let answers = await Answers.find({ queryId: req.params.id })
    if (answers) {

      resp.send(answers);
    } else {
      resp.send({ result: "not found" });
    }
  } catch (error) {
    console.log(error);

  }
})
// finding user particular query
app.post('/yours-query', async (req, resp) => {
  try {
    let yourQuery = await Polls.find(req.body)
    if (yourQuery) {
      resp.send(yourQuery);
    }
  } catch (error) {

  }
})
// deleting query 
app.delete('/delete-query/:id', async (req, resp) => {
  try {
    let query = await Polls.findById({ _id: req.params.id });
    if (!query) return resp.send(404).send("Not Found")
    query = await Polls.findByIdAndDelete(req.params.id)
    resp.json({ "msg": "Deleted", query: query })
  } catch (error) {
    console.log(error);
    resp.send("Something Went Wrong");
  }
})

// Editing Query here 
app.put('/queryedit/:id', async (req, resp) => {
  try {
    let updateQuery = await Polls.updateOne(
      { _id: req.params.id },
      {
        $set: req.body
      }
    )
    resp.send(updateQuery);
  } catch (error) {
    console.log(error)
  }
})
// Edit answer 
app.put('/answer-edit/:id', async (req, resp) => {
  let editAnswer = await Answers.updateOne(
    { _id: req.params.id }, {
    $set: req.body
  }
  )
  resp.send(editAnswer);
})
// Delete answer 
app.delete('/delete-answer/:id', async (req, resp) => {
  try {
    let answer = await Answers.findById({ _id: req.params.id });
    if (!answer) return resp.send(404).send("Not Found")
    answer = await Answers.findByIdAndDelete(req.params.id)
    resp.json({ Msg: "Deleted", query: answer })
  } catch (error) {
    console.log(error);
    resp.send("Something Went Wrong");
  }
})

//Delete all the answers of the query if query is deleted 
app.delete('/delete-query-answers/:id', async (req, resp) => {
  try {
    let answers = await Answers.find({ queryId: req.params.id })
    if (!answers) return resp.send(404).send("Not Found")
    answers = await Answers.deleteMany({ queryId: req.params.id })
    resp.json({ Msg: "Deleted All the answers", query: answers })
  } catch (error) {
    console.log(error);
    resp.send("Something Went Wrong");
  }
})

app.listen(PORT, () => {
  console.log("App listen at port 5000");
});
