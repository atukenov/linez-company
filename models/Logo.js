const mongoose = require("mongoose");

const LogoSchema = new mongoose.Schema({
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
    userId: Schema.Types.ObjectId
});

module.exports = Logo = mongoose.model("logo", LogoSchema);