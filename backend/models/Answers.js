const mongoose = require("mongoose");
const answerSchema = new mongoose.Schema({
  queryId: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
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
const Answers = mongoose.model("answers", answerSchema);
Answers.createIndexes();
module.exports = Answers;
