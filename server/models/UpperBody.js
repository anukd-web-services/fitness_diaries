const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema({
  name: String,
  description: String,
  difficulty: String,
  duration: Number,
  calories: Number,
  imageUrl: String
});

const Exercise = mongoose.model("Exercise", exerciseSchema);
module.exports = Exercise;
