const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  message: { type: String },
  sender: { type: Boolean },
});

module.exports = Message = mongoose.model("message", MessageSchema);
