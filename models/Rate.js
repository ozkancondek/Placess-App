const mongoose = require("mongoose");

const RateSchema = new mongoose.Schema({
  answers: {
    type: Array,
    required: true,
  },
  email: {
    type: String,
  },
  message: {
    type: String,
  },
});

module.exports = Rate = mongoose.model("rate", RateSchema);
