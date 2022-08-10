const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    userId: Schema.Types.ObjectId,
    logos: [Schema.Types.ObjectId],
    interiors: [Schema.Types.ObjectId]
});

module.exports = Project = mongoose.model("project", ProjectSchema);