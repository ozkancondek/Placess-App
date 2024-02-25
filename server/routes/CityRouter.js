const express = require("express");
const { check } = require("express-validator");
const router = express.Router();

const CityController = require("../../controllers/CityController");

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

/**
 * @route post /api/city/rate
 * @desc add rate
 * @access Private
 */
router.post("/rate", CityController.addRate);
/**
 * @route get /api/city/rates
 * @desc show all rates
 * @access Private
 */
router.get("/rates", CityController.showAllRates);

module.exports = router;
