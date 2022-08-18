const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DetailSchema = new Schema({
  timeline: {
    label: {
      type: String,
    },
    started: {
      type: Date,
    },
    finished: {
      type: Date,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    photos: [
      {
        title: { type: String },
        description: { type: String },
        url: { type: String },
      },
    ],
  },
  projectId: Schema.Types.ObjectId,
});

module.exports = Detail = mongoose.model("detail", DetailSchema);
