const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema({
  name: String,
  description: String,
  difficulty: String,
  duration: Number,
  category: String,     
  bodyPart: String,     
  imageUrl: String,
  calories: Number
});


const Exercise = mongoose.model("Exercise", exerciseSchema);
module.exports = Exercise;
