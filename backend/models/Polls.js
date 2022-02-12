const mongoose = require("mongoose");
const PollsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  query: {
    type: String,
    required: true,
  },
  tags: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  userId:{
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
const Polls = mongoose.model("polls", PollsSchema);
Polls.createIndexes();
module.exports = Polls;
