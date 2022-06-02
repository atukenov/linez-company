const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  modifiedAt: {
    type: Date,
    default: Date.now,
  },
  birthday: {
    date: Date,
  },
  totalOrders: {
    type: Number,
    default: 0,
  },
  gender: {
    type: String,
  },
  address: {
    type: String,
  },
});

module.exports = User = mongoose.model("user", UserSchema);
