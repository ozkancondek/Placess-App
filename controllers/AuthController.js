const User = require("../models/UserModel");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const { exists } = require("../models/UserModel");
const jwt = require("jsonwebtoken");

exports.authRegister = async (req, res) => {
  const { username, email, password } = req.body;

  //-validate the fields

  const validationErr = validationResult(req);
  if (validationErr.errors.length > 0) {
    return res.status(400).json({ errors: validationErr.array() });
  }
  //- check if user aldready registered
  const userData = await User.findOne({ email });
  if (userData) {
    return res
      .status(400)
      .json({
        errors: [{ message: "There is an another account on this email." }],
      });
  }
  //-crypt password
  const salt = await bcrypt.genSalt(10);

  const newPassword = await bcrypt.hash(password, salt);

  //-save user to db
  const user = new User({
    username,
    email,
    password: newPassword,
  });
  await user.save();

  res.send("You successfully registered.You can log in to your account.");
};
exports.authLogin = async (req, res) => {
  const { email, password } = req.body;

  //-validate the fields

  const validationErr = validationResult(req);
  if (validationErr.errors.length > 0) {
    return res.status(400).json({ errors: validationErr.array() });
  }
  //-user exist
  const userData = await User.findOne({ email });
  if (!userData) {
    return res
      .status(300)
      .json({ errors: [{ message: "You dont have an acoount." }] });
  }
  //-password compare
  const isPasswordMatch = await bcrypt.compare(password, userData.password);
  if (!isPasswordMatch) {
    return res
      .status(400)
      .json({ errors: [{ message: "Please check your credentials." }] });
  }
  //-authentication return JSON WEB TOKEN-JWT
  jwt.sign(
    { userData },
    process.env.JWT_SECRET_KEY,
    { expiresIn: 3600 },
    (err, token) => {
      if (err) {
        return res.status(400).json({ errors: [{ message: "Unknown error" }] });
      }
      res.send(token);
    }
  );
};
