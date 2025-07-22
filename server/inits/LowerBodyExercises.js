import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Exercise from '../models/ExerciseModel.js';


dotenv.config({ path: '../.env' });

const exercises = [
  {
    name: "Bodyweight Squats",
    description: "Lower body strength exercise focusing on glutes and thighs",
    difficulty: "Easy",
    duration: 8,
    category: "Strength",
    imageUrl: "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg",
    calories: 60,
    bodyPart: "Lower Body"
  },
  {
    name: "Lunges",
    description: "Leg strengthening and balance exercise",
    difficulty: "Medium",
    duration: 10,
    category: "Strength",
    imageUrl: "https://images.pexels.com/photos/4348626/pexels-photo-4348626.jpeg",
    calories: 75,
    bodyPart: "Lower Body"
  },
  {
    name: "Wall Sit",
    description: "Static hold targeting quads and glutes",
    difficulty: "Medium",
    duration: 5,
    category: "Strength",
    imageUrl: "https://images.pexels.com/photos/4498283/pexels-photo-4498283.jpeg",
    calories: 40,
    bodyPart: "Lower Body"
  },
  {
    name: "Step-Ups",
    description: "Lower body workout using an elevated platform",
    difficulty: "Easy",
    duration: 7,
    category: "Strength",
    imageUrl: "https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg",
    calories: 55,
    bodyPart: "Lower Body"
  },
  {
    name: "Glute Bridges",
    description: "Strengthens the glutes and lower back",
    difficulty: "Easy",
    duration: 6,
    category: "Strength",
    imageUrl: "https://images.pexels.com/photos/6455996/pexels-photo-6455996.jpeg",
    calories: 50,
    bodyPart: "Lower Body"
  },
  {
    name: "Calf Raises",
    description: "Isolates and strengthens calf muscles",
    difficulty: "Easy",
    duration: 5,
    category: "Strength",
    imageUrl: "https://images.pexels.com/photos/4720625/pexels-photo-4720625.jpeg",
    calories: 35,
    bodyPart: "Lower Body"
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
