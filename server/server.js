// ─────────────────────────────────────────────────────────────
// server.js  (root of fitness_diaries/server)
// ─────────────────────────────────────────────────────────────
const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const session = require("./config/cookieSession");
const authRoutes = require("./routes/authRoutes");
const exerciseRoutes = require("./routes/exerciseRoutes");

const app = express();

// ─── Load env vars ───────────────────────────────────────────
dotenv.config({ path: path.join(__dirname, "../.env") });

// ─── Database ────────────────────────────────────────────────
connectDB();

// ─── Middle‑ware ─────────────────────────────────────────────
app.use(session);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ─── View engine (EJS for server‑rendered pages) ────────────
const ejsMate = require("ejs-mate");
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// ─── Static assets ───────────────────────────────────────────
app.use(express.static(path.join(__dirname, "public"))); // your public assets
app.use(express.static(path.join(__dirname, "../client/build"))); // React build assets

// ─── API routes ──────────────────────────────────────────────
app.use("/auth", authRoutes); // e.g. /auth/register
app.use("/api/exercises", exerciseRoutes); // e.g. /api/exercises

// ─── React routes (serve index.html manually) ───────────────
const clientBuildPath = path.join(__dirname, "../client/build/index.html");

app.get("/exercises", (_req, res) => res.sendFile(clientBuildPath));
app.get("/cards", (_req, res) => res.sendFile(clientBuildPath));
app.get("/dashboard", (_req, res) => res.sendFile(clientBuildPath));
// app.get("/profile/:id", (_req, res) => res.sendFile(clientBuildPath));

// ─── Server‑rendered pages (EJS examples) ────────────────────
app.get("/", (_req, res) => res.render("home")); // your EJS home page
app.get("/auth/login", (_req, res) => res.render("login")); // your EJS login page

// ─── 404 handler (no wildcard) ──────────────────────────────
app.use((req, res) => {
  res.status(404).render("404"); // create views/404.ejs
});

// ─── Start server ───────────────────────────────────────────
const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>
  console.log(`Server listening on http://localhost:${PORT}`)
);
