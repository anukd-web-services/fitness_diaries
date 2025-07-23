const express = require('express');
const router = express.Router();
const Exercise = require('../../models/ExerciseModel');

router.get('/', async (req, res) => {
  try {
    const exercises = await Exercise.find({ bodyPart: "Upper Body" });
    res.json(exercises);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load upper body exercises' });
  }
});

module.exports = router;
