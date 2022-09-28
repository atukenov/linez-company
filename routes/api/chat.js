const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");

const { check, validationResult } = require("express-validator");
const gravatar = require("gravatar");

const auth = require("../../middleware/auth");

const Message = require("../../models/Message");

let messages = [
  {
    message:
      "If anybody wanted to photograph my life, they'd get bored in a day.",
    sender: 1,
  },
  {
    message: "Are you kidding, really?",
    sender: 0,
  },
];

// @route 	GET api/chat/receiveAllMessage
// @access	Only Admin
// @desc    Get all users
router.get("/receiveAllMessage/:projectId", auth, async (req, res) => {
  const { projectId } = req.params;
  try {
    // const messages = await Message.find({ projectId });
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).send("Server error");
  }
});

router.post("/sendMessage", auth, async (req, res) => {
  const { message } = req.body;

  let sender = 0;
  if (req.user.id == "62eaf392c155aa89524320ab") sender = 1;
  console.log(sender);
  messages.push({ message, sender });
});

module.exports = router;
