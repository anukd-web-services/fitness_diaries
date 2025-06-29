const express = require("express");
const app = express();

const ejsMate = require("ejs-mate");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

const session = require("./config/cookieSession");

// Set up EJS
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(session);
app.use(express.static(path.join(__dirname, "public")));

// ✅ Serve React build (after public)
app.use(express.static(path.join(__dirname, "../client/build")));

// ✅ React fallback route (after API and EJS routes)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
const authRoutes = require("./routes/authRoutes");
app.use("/auth", authRoutes);

// Start server
app.listen(8080, () => {
  console.log("Listening on port 8080");
});
