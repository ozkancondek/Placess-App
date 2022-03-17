const City = require("../models/CityModel");
const Comment = require("../models/CommentModel");

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
  const { comment, username, cityName } = req.body;
  //save comment to db
  const newComment = new Comment({
    comment,
    username,
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
exports.getCommentsForCity = async (req, res) => {
  const { cityName } = req.body;

  try {
    const SingleCityComments = await Comment.find({
      cityName: cityName,
    });

    if (!SingleCityComments) {
      return res.send("there is no comment");
    }
    res.status(200).json({ SingleCityComments });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
