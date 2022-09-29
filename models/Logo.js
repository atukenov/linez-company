const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MessageSchema = require("./Message").schema;

const LogoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  modifiedAt: {
    type: Date,
    default: Date.now,
  },
  comment: String,
  message: [MessageSchema],
  userId: Schema.Types.ObjectId,
});

module.exports = Logo = mongoose.model("logo", LogoSchema);
