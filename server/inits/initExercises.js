import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Exercise from '../models/UpperBody.js';


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
  },
  {
  name: "Lunges",
  description: "Leg strengthening and balance exercise",
  difficulty: "Medium",
  duration: 12,
  category: "Strength",
  imageUrl: "https://images.pexels.com/photos/4348626/pexels-photo-4348626.jpeg",
  calories: 80
},
{
  name: "Plank",
  description: "Core strengthening static hold",
  difficulty: "Hard",
  duration: 5,
  category: "Core",
  imageUrl: "https://images.pexels.com/photos/4348653/pexels-photo-4348653.jpeg",
  calories: 40
},
{
  name: "Jumping Jacks",
  description: "Full body cardio warm-up",
  difficulty: "Easy",
  duration: 7,
  category: "Cardio",
  imageUrl: "https://images.pexels.com/photos/6339477/pexels-photo-6339477.jpeg",
  calories: 50
},
{
  name: "Mountain Climbers",
  description: "Cardio and core training movement",
  difficulty: "Medium",
  duration: 6,
  category: "Cardio",
  imageUrl: "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg",
  calories: 70
},
{
  name: "Burpees",
  description: "High-intensity full body exercise",
  difficulty: "Hard",
  duration: 8,
  category: "Cardio",
  imageUrl: "https://blog.sporter.com/wp-content/uploads/2023/10/Copy-of-Burpees-Exercise-b8-102023.jpg",
  calories: 100
},
{
  name: "Bicycle Crunches",
  description: "Abdominal workout targeting obliques",
  difficulty: "Medium",
  duration: 6,
  category: "Core",
  imageUrl: "https://breakingmuscle.com/wp-content/uploads/2023/07/Shutterstock_2235475725.jpg",
  calories: 45
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
