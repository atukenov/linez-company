const express = require("express");
const router = express.Router();

const auth = require("../../middleware/auth");
const User = require("../../models/User");

// @route 	GET api/profile
// @access	Public
router.get("/", (req, res) => res.send("profile route"));

// @route 	POST api/profile/update
// @access	Public
router.post("/udpate", auth, (req, res) => {
  const newInfo = new User(req.body);
  res.status(200).json(newInfo);
});

module.exports = router;
