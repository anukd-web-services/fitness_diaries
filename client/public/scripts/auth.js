import express from "express";
import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import authRoutes from "../../server/routes/authRoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env
dotenv.config();

const app = express();

// ✅ FIXED: Serve static files from correct public folder
app.use(express.static(path.join(__dirname, "../../client/public")));
app.use(express.urlencoded({ extended: true }));

// View engine setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../server/views"));

// Use routes
app.use(authRoutes);

// Start server
app.listen(8080, () => {
  console.log(`✅ Server running at http://localhost:8080`);
});
