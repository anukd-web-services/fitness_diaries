import React from 'react';
import ExerciseCard from '../components/ExerciseCard';

const Exercises = () => {
  return (
    <div>
      <ExerciseCard
        name="Push Ups"
        duration={10}
        calories={100}
        difficulty="Beginner"
        imageUrl="https://images.pexels.com/photos/3775164/pexels-photo-3775164.jpeg"
      />
      <ExerciseCard
        name="Squats"
        duration={15}
        calories={120}
        difficulty="Intermediate"
        imageUrl="https://images.pexels.com/photos/6339655/pexels-photo-6339655.jpeg"
      />
    </div>
  );
};

export default Exercises;
