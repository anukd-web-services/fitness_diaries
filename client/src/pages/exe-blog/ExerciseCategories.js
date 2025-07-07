// src/pages/exe-blog/ExerciseCategories.js
import React from 'react';
import ExerciseCategoryCard from '../../components/exercise/ExerciseCategoryCard.jsx'; // Ensure this path is correct

const categories = [
  {
    title: 'Upper Body',
    image: 'https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg'
  },
  {
    title: 'Lower Body',
    image: 'https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg'
  },
  {
    title: 'Core',
    image: 'https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg'
  },
  {
    title: 'Cardio',
    image: 'https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg'
  },
  {
    title: 'Full Body',
    image: 'https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg'
  },
  {
    title: 'Flexibility',
    image: 'https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg'
  },
];

const ExerciseCategories = () => {
  const handleCardClick = (title) => {
    console.log('Clicked:', title);
    // You can navigate to another page here using React Router
  };

  return (
    <div className="category-container">
      {categories.map((cat) => (
        <ExerciseCategoryCard
          key={cat.title}
          title={cat.title}
          image={cat.image}
          onClick={() => handleCardClick(cat.title)}
        />
      ))}
    </div>
  );
};

export default ExerciseCategories;