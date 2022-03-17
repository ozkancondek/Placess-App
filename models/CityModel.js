const mongoose = require("mongoose");

const CitySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
    required: true,
  },
});

module.exports = City = mongoose.model("city", CitySchema);
