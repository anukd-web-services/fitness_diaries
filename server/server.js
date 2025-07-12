const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const { createProxyMiddleware } = require("http-proxy-middleware");

const connectDB = require("./config/db");
const session = require("./config/cookieSession");
const authRoutes = require("./routes/authRoutes");
const exerciseRoutes = require("./routes/exerciseRoutes");

dotenv.config({ path: path.join(__dirname, "../.env") });

const app = express();
const isProd = process.env.NODE_ENV === "production";

// Connect to DB
connectDB();

// Middlewares
app.use(session);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// EJS
const ejsMate = require("ejs-mate");
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Public assets
app.use(express.static(path.join(__dirname, "public")));

// API routes
app.use("/auth", authRoutes);
app.use("/api/exercises", exerciseRoutes);

// React frontend handling
if (isProd) {
  // Serve built static files in production
  app.use(express.static(path.join(__dirname, "../client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
} else {
  // Proxy to CRA dev server in development
  app.use(
    "/",
    createProxyMiddleware({
      target: "http://localhost:3000",
      changeOrigin: true,
      ws: true,
      logLevel: "silent",
    })
  );
}

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>
  console.log(`🚀 Express running at http://localhost:${PORT}`)
);
