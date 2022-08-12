const express = require("express");
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");
const Logo = require("../../models/Logo");

const router = express.Router();

// @route   GET api/logo
// @access  Authorized
// @desc    Get all logos that exists
router.get("/", auth, async (req, res) => {
  const userId = req.userId;
  try {
    const logos = await Logo.find({ userId });
    console.log("LOGOS: ", logos);
    res.status(200).json(logos);
  } catch (err) {
    res.status(500).send("Server error...");
  }
});

// @route   POST api/logo
// @access  Authorized
// @desc    Create a new logo
router.post(
  "/",
  auth,
  [
    check("title", "Please include a title").exists(),
    check("description", "Please include a description").exists(),
  ],
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      err = error.array()[0];
      return res.status(400).json({ msg: err.msg });
    }
    try {
      const newLogo = await Logo.create(req.body);
      console.log("New Logo: ", newLogo);
      res.status(200).json(newLogo);
    } catch (err) {
      res.status(500).send(err);
    }
  }
);

// @route   GET api/logo/logoID
// @access  Authorized
// @desc    Get logo with logoID
router.get("/:logoID", auth, async (req, res) => {
  const logoID = req.params.logoID;
  try {
    const logo = await Logo.findById(logoID);
    console.log("LOGO: ", logo);
    res.status(200).json(logo);
  } catch (err) {
    res.status(500).send("Server error");
  }
});

// @route   PUT api/logo/logoID
// @access  Authorized
// @desc    Update logo with logoID
router.put(
  "/:logoID",
  auth,
  [
    check("title", "Please include a title").exists(),
    check("description", "Please include a description").exists(),
  ],
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      err = error.array()[0];
      return res.status(400).json({ msg: err.mst });
    }
    const logoID = req.params.logoID;
    const { title, description } = req.body;
    try {
      const logo = await Logo.findById(logoID);
      if (logo === null) return res.status(404).json({ msg: "Logo not found" });
      logo.title = title;
      logo.description = description;
      req.console.log("LOGO: ", logo);
      await logo.save();
      res.status(200).json(logo);
    } catch (err) {
      res.status(500).send("Server error");
    }
  }
);

// @route   DELETE api/logo/logoID
// @access  Authorized
// @desc    Delete logo with logoID
router.delete("/:logoID", auth, async (req, res) => {
  const logoID = req.params.logoID;
  try {
    await Logo.findByIdAndDelete(logoID);
    req.console.log("LOGO Deleted");
    res.status(200).json({ msg: "Deleted." });
  } catch (err) {
    res.status(500).send("Server error");
  }
});

module.exports = router;
