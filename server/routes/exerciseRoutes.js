// routes/exerciseRoutes.js

const express = require('express');
const Exercise = require('../models/ExerciseModel');

const router = express.Router();

router.get('/:part', async (req, res) => {
  const part = req.params.part.toLowerCase();

  const partMap = {
    upperbody: "Upper Body",
    lowerbody: "Lower Body",
    core: "Core",
    cardio: "Cardio"
  };

  const bodyPart = partMap[part];

  if (!bodyPart) {
    return res.status(400).json({ message: "Invalid exercise type." });
  }

  try {
    const exercises = await Exercise.find({ bodyPart });
    res.json(exercises);
  } catch (err) {
    res.status(500).json({ message: "Error fetching exercises." });
  }
});

module.exports = router; // ✅ CommonJS export
