import express from "express";
import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import authRoutes from "../../server/routes/authRoutes.js"; // ✅ ES module import

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Load .env if needed
dotenv.config();

const app = express();

// ✅ Middlewares
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// ✅ View Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../server/views"));

// ✅ Use Routes
app.use(authRoutes);

// ✅ Server
app.listen(8080, () => {
  console.log(`✅ Server running at http://localhost:8080`);
});
