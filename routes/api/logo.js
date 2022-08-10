import express from "express";
import { check, validationResult } from "express-validator";
import auth from "../../middleware/auth";
import Logo from "../../models/Logo";

const router = express.Router();

// @route   GET api/logo
// @access  Authorized
// @desc    Get all logos that exists
router.get("/", auth, async (req, res) => {
  const userId = req.userId;
  try {
    const logos = await Logo.find({ userId }).exec();
    console.log("LOGOS: ", logos);
    res.status(200).json(logos);
  } catch (err) {
    res.status(500).send("Server error");
  }
});

// @route   GET api/logo/logoID
// @access  Authorized
// @desc    Get logo with logoID
router.get("/:logoID", auth, async (req, res) => {
  const userId = req.userId;
  const logoID = req.params.logoID;
  try {
    const logo = await Logo.findById(logoID).exec();
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
    const userId = req.userId;
    const logoID = req.params.logoID;
    const { title, description } = req.body;
    try {
      const logo = await Logo.findById(logoID).exec();
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
  const userId = req.userId;
  const logoID = req.params.logoID;
  try {
    await Logo.findByIdAndDelete(logoID).exec();
    req.console.log("LOGO Deleted");
    res.status(200).json({ msg: "Deleted." });
  } catch (err) {
    res.status(500).send("Server error");
  }
});
