import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Exercise from './models/ExerciseModel.js';


dotenv.config({ path: '../.env' });

const exercises = [
  {
    name: "Push Ups",
    description: "Upper body strength training",
    difficulty: "Medium",
    duration: 10,
    category: "Strength",
    imageUrl: "https://images.pexels.com/photos/3775164/pexels-photo-3775164.jpeg",
    calories: 60 
  },
  {
    name: "Squats",
    description: "Lower body cardio",
    difficulty: "Easy",
    duration: 5,
    category: "Cardio",
    imageUrl: "https://images.pexels.com/photos/6339655/pexels-photo-6339655.jpeg",
    calories: 50
  }
];

mongoose.connect(process.env.MONGO_URI).then(async () => {
  await Exercise.deleteMany();
  await Exercise.insertMany(exercises);
  console.log("Exercises inserted");
  process.exit();
}).catch(err => {
  console.error("DB Error:", err);
  process.exit(1);
});
