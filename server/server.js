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
app.use("/exercises", exerciseRoutes); // This is correct now



// === Static React Frontend ===
if (isProd) {
  app.use(express.static(path.join(__dirname, "../client/build")));

  app.get("*", (_req, res) =>
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
  );
} else {
  // Only for local dev: proxy CRA
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

// === Listen on correct port ===
const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>
  console.log(`🚀 Express running at http://localhost:${PORT}`)
);
