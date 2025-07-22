const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true // Assuming name is always required
  },
  description: String,
  difficulty: String,
  duration: Number,
  category: String,
  bodyPart: {
    type: String,
    required: true, // Make sure bodyPart is always provided
    enum: ["Upper Body", "Lower Body", "Core", "Cardio", "Full Body"] // Enforce these specific values
  },
  imageUrl: String,
  calories: Number
});

const Exercise = mongoose.model("Exercise", exerciseSchema);
module.exports = Exercise;