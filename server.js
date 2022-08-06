const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");
const path = require("path");

const app = express();

//Connect DB
connectDB();

// Init middleware
app.use(express.json({ extended: false }));
app.use(express.static(path.join(__dirname, "client", "build")));

// Define routes
app.use("/api/auth", require("./routes/api/auth"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
