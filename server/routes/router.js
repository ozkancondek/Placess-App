const express = require("express");

const router = express.Router();

const AuthRouter = require("./AuthRouter");
const CitiesRouter = require("./CitiesRouter");
const CityRouter = require("./CityRouter");

/**
 * @route  /api/auth
 * @desc auth endpoint
 
*/
router.use("/auth", AuthRouter);
/**
 * @route  /api/cities
 * @desc cities endpoint
 
*/
router.use("/cities", CitiesRouter);
/**
 * @route  /api/city
 * @desc city endpoint(comments)
 
*/
router.use("/city", CityRouter);
module.exports = router;
