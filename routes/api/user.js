const express = require("express");
const router = express.Router();

const { check, validationResult } = require("express-validator");
const gravatar = require("gravatar");

const auth = require("../../middleware/auth");

const User = require("../../models/User");

// @route 	GET api/user
// @access	Public
// @desc    Get all users
router.get("/", auth, async (req, res) => {
  try {
    const user = await User.find().select("-password");
    console.log(user);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).send("Server error");
  }
});

module.exports = router;
