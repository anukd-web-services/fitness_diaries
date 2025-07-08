// src/components/excercise/ExerciseCategoryCard.jsx
import React from 'react';
import '../../styles/ExerciseCategoryCard.css';

const ExerciseCategoryCard = ({ title, description, image }) => {
  return (
    <div className="exercise-card">
      <img src={image} alt={title} className="exercise-image" />
      <div className="exercise-content">
        <h3 className="exercise-title">{title}</h3>
        <p className="exercise-description">{description}</p>
        <button className="exercise-button">See Exercises</button>
      </div>
    </div>
  );
};

export default ExerciseCategoryCard;