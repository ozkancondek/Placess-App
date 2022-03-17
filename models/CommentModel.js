const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: true,
  },
  username: {
    type: String,
  },
  addDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Comment = mongoose.model("city", CommentSchema);
