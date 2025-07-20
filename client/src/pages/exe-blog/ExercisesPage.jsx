import React, { useEffect, useState } from "react";
import ExerciseCard from "../../components/exercise/ExerciseCard";
import "../../styles/ExerciseCard.css";

const ExercisesPage = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const res = await fetch("/api/exercises");
        const data = await res.json();
        setExercises(data);
      } catch (err) {
        console.error("Failed to fetch exercises:", err);
      }
    };

    fetchExercises();
  }, []);

  return (
    <div className="exercise-grid">
      {exercises.map((exercise) => (
        <ExerciseCard
          key={exercise._id}
          name={exercise.name}
          description={exercise.description}
          imageUrl={exercise.imageUrl}
          duration={exercise.duration}
          calories={exercise.calories || 100}
          difficulty={exercise.difficulty}
        />
      ))}
    </div>
  );
};

export default ExercisesPage;
