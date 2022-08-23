const express = require("express");
const router = express.Router();

const auth = require("../../middleware/auth");
const {
  uploadImages,
  resizeImages,
  getResult,
} = require("../../middleware/upload");

const User = require("../../models/User");

// @route 	POST api/image
// @access	Auth
// @desc    Upload files
router.post("/", auth, uploadImages, resizeImages, getResult);

module.exports = router;
