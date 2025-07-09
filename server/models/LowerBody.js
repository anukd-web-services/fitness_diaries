const mongoose = require("mongoose");
const exerciseSchema = new mongoose.Schema({
  name: String,
  description: String,
  difficulty: String,
  duration: Number,
  category: String,
  imageUrl: String
});

const Exercise = mongoose.model("LowerBody", exerciseSchema);
module.exports = Exercise;
