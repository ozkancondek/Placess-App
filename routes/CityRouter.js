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
 * @route post /api/city/forum
 * @desc show all comments
 * @access Private
 */
router.get("/forum", CityController.showAllComments);
/**
 * @route post /api/city/forum/:id
 * @desc show comment for single city
 * @access Private
 */
router.get("/forum/city", CityController.getCommentsForCity);

module.exports = router;
