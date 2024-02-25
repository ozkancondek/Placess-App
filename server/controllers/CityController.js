const City = require("../models/CityModel");
const Comment = require("../models/CommentModel");
const Rate = require("../models/Rate");

exports.addNewPlace = async (req, res) => {
  const { image, title, description } = req.body;
  //save city to db
  const city = new City({
    image,
    title,
    description,
  });
  await city.save();
  res.send("City added.");
};

exports.addComment = async (req, res) => {
  const { comment, userName, cityName } = req.body;
  //save comment to db
  const newComment = new Comment({
    comment,
    userName,
    cityName,
  });
  await newComment.save();
  res.send("comment added");
};

exports.showAllComments = async (req, res) => {
  try {
    const allComments = await Comment.find();
    res.status(200).json({ allComments });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

//rates
exports.addRate = async (req, res) => {
  const { answers, email, message } = req.body;
  //save rate to db
  const newRate = new Rate({
    answers,
    email,
    message,
  });
  await newRate.save();
  res.send("Rate added");
};

exports.showAllRates = async (req, res) => {
  try {
    const allRates = await Rate.find();
    res.status(200).json({ allRates });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
