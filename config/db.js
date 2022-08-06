const mongoose = require("mongoose");
const config = require("config");
const db = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.bf4gkcg.mongodb.net/?retryWrites=true&w=majority`;

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
