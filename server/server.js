const express = require("express");
const app = express();
const path = require("path");
const dotenv = require("dotenv");


// Load environment variables
dotenv.config({ path: path.join(__dirname, "../.env") });

// Database connection
const connectDB = require("./config/db");
connectDB();

// Session middleware
const session = require("./config/cookieSession");
app.use(session);

// View engine (if using EJS)
const ejsMate = require("ejs-mate");
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Static files
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "../client/build")));
app.use(express.urlencoded({ extended: true }));

// API routes
const authRoutes = require("./routes/authRoutes");
app.use("/auth", authRoutes);

const exerciseRoutes = require("./routes/exerciseRoutes");
app.use("/api/exercises", exerciseRoutes);


// Serve React app ONLY at the root
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
