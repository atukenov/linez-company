const express = require("express");
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");
const Detail = require("../../models/Detail");

const router = express.Router();

// @route   GET api/project/:projectId
// @access  Public
// @desc    Get project details
router.get("/:projectId", async (req, res) => {
  const { projectId } = req.params;
  try {
    const projectDetails = await Detail.find({ projectId });
    res.status(200).json(projectDetails);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error...");
  }
});

// @route   POST api/project
// @access  Authorized
// @desc    Update or Create details for the project
router.post(
  "/",
  auth,
  [check("title", "Please include a title").exists()],
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      err = error.array()[0];
      return res.status(400).json({ msg: err.msg });
    }
    const { _id, projectId, title, started, finished, description, label } =
      req.body;
    const newTimeline = {
      timeline: {
        title: title,
        started: started,
        finished: finished,
        description: description,
        label: label,
      },
      projectId: projectId,
    };
    try {
      const newDetailProject = await Detail.findByIdAndUpdate(
        _id,
        { timeline: newTimeline.timeline },
        { new: true, upsert: true }
      );

      console.log("New ProjectDetail: ", newDetailProject);
      res.status(200).json(newDetailProject);
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  }
);

// @route   POST api/project/timeline
// @access  Authorized
// @desc    Update or Create details for the project
router.post(
  "/timeline",
  auth,
  [check("title", "Please include a title").exists()],
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      err = error.array()[0];
      return res.status(400).json({ msg: err.msg });
    }
    const { projectId, title, started, finished, description, label } =
      req.body;
    const newTimeline = {
      timeline: {
        title: title,
        started: started,
        finished: finished,
        description: description,
        label: label,
      },
      projectId: projectId,
    };
    try {
      const newCreatedTimeline = await Detail.create(newTimeline);

      console.log("New ProjectDetail: ", newCreatedTimeline);
      res.status(200).json(newCreatedTimeline);
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  }
);

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
