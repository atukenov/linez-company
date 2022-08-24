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
app.use("/upload", express.static("upload"));

// Define routes
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/logo", require("./routes/api/logo"));
app.use("/api/admin", require("./routes/api/admin"));
app.use("/api/project", require("./routes/api/project"));
app.use("/api/image", require("./routes/api/image"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

if (process.env.NODE_ENV === "production") {
  app.enable("trust proxy");
  app.use((req, res, next) => {
    if (req.secure) next();
    else res.redirect(`https://'${req.headers.host}${req.url}`);
  });
}
