const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
  },
  addDate: {
    type: Date,
    default: Date.now,
  },
  cityName: {
    type: String,
    required: true,
  },
});

module.exports = Comment = mongoose.model("comment", CommentSchema);
