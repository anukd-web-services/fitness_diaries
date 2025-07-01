import React from 'react';
import '../../styles/ExerciseCard.css';

const ExerciseCard = ({
  name,
  description,
  imageUrl,
  duration,
  calories,
  difficulty
}) => {
  return (
    <div className="exercise-card">
      <div className="card-image" style={{ flex: '0 0 40%' }}>
        <img src={imageUrl} alt={name} />
      </div>

      <div className="card-details">
        <div className="card-header">
          <div className="card-title-group">
            <span className="card-headline-text">{name}</span>
          </div>
          <div className="card-actions">
            <button className="add-button">Add</button>
          </div>
        </div>

        <div className="card-description">
          <p>{description}</p>
        </div>

        <hr />

        <div className="card-info-row">
          <div>
            <span className="info-title">Duration</span>
            <span className="info-value">{duration} mins</span>
          </div>
          <div>
            <span className="info-title">Calories</span>
            <span className="info-value">{calories} kcal</span>
          </div>
          <div>
  <span className="info-title">Difficulty</span>
  <span className="info-value">{difficulty || "N/A"}</span>
</div>

        </div>

        <div className="card-buttons">
          <button className="start-btn">Start Now</button>
          <button className="addrout-btn">Add to Routine</button>
        </div>
      </div>
    </div>
  );
};

export default ExerciseCard;
