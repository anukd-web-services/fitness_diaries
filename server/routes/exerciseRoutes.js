const express = require("express");
const Exercise = require("../models/UpperBody");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const exercises = await Exercise.find();
    res.json(exercises);
  } catch (err) {
    console.error("Error fetching exercises:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
