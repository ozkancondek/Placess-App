const express = require("express");
const { check } = require("express-validator");
const router = express.Router();

const CityController = require("../controllers/CityController");

//routes for /api/city

/**
 * @route post /api/city/newplace
 * @desc Show all cities
 * @access Public
 */
router.post("/newplace", CityController.addNewPlace);

/**
 * @route post /api/city/addcomment
 * @desc add comment
 * @access Private
 */
router.post("/addcomment", CityController.addComment);
/**
 * @route get /api/city/comments
 * @desc show all comments
 * @access Private
 */
router.get("/comments", CityController.showAllComments);

module.exports = router;
