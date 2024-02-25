const express = require("express");
const { check } = require("express-validator");
const router = express.Router();

const CitiesController = require("../../controllers/CitiesController");

const validations = require("../middleware/validationMiddleware");

//routes for /api/cities

/**
 * @route GET /api/cities
 * @desc Show all cities
 * @access Public
 */
router.get("/", CitiesController.getCityList);

/**
 * @route GET /api/cities/:id
 * @desc show particular city info
 * @access Public/Private
 */
router.get("/details/:id", CitiesController.getCityDetails);

module.exports = router;
