const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");

const { check, validationResult } = require("express-validator");
const gravatar = require("gravatar");

const auth = require("../../middleware/auth");

const Logo = require("../../models/Logo");
const Message = require("../../models/Message");

let messages = [];

// @route 	GET api/chat/receiveAllMessage
// @access	Public
// @desc    Get all messages
router.get("/receiveAllMessage", auth, async (req, res) => {
  const { logo, step } = req.query;
  try {
    // const messages = await Message.find({ projectId });
    const data = await Logo.findById(logo);

    if (data.message === undefined) {
      data.message = new Message();
      await data.save();
    }
    res.status(200).json(data.message);
  } catch (err) {
    res.status(500).send("Server error");
  }
});

// @route 	GET api/chat/sendMessage
// @access	Public
// @desc    Send new message
router.post("/sendMessage", auth, async (req, res) => {
  const { logo, message, sender } = req.body;
  try {
    const data = await Logo.findById(logo);
    data.message.push(new Message({ message, sender }));
    await data.save();
    res.status(200).json({ logo, message, sender });
  } catch (err) {
    res.status(500).send("Server error");
  }
});

module.exports = router;
