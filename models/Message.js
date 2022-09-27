const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  messages: [
    {
      message: { type: String },
      sender: { type: Number },
    },
  ],
  modifiedAt: {
    type: Date,
    default: Date.now,
  },
  userId: Schema.Types.ObjectId,
});

module.exports = Message = mongoose.model("message", MessageSchema);
