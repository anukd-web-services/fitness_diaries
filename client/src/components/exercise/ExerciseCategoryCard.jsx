// src/components/ExerciseCategoryCard.jsx
import React from 'react';
import '../../styles/ExerciseCategoryCard.css';

const ExerciseCategoryCard = ({ title, image, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={image} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
    </div>
  );
};

export default ExerciseCategoryCard;
