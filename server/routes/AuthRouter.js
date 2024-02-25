const express = require("express");
const { check } = require("express-validator");
const router = express.Router();

const AuthController = require("../../controllers/AuthController");

const validations = require("../middleware/validationMiddleware");

//routes for /api/auth

/**
 * @route POST /api/auth/register
 * @desc Register endpoint
 * @access Public
 */
router.post(
  "/register",
  validations.emailPasswordValidation,
  AuthController.authRegister
);

/**
 * @route POST /api/auth/login
 * @desc login endpoint
 * @access Public/Private
 */
router.post(
  "/login",
  validations.emailPasswordValidation,
  AuthController.authLogin
);

module.exports = router;
