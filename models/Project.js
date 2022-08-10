const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  userId: Schema.Types.ObjectId,
  logos: [Schema.Types.ObjectId],
  interiors: [Schema.Types.ObjectId],
});

module.exports = Project = mongoose.model("project", ProjectSchema);
