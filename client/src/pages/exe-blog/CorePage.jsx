import React, { useEffect, useState } from "react";
import ExerciseCard from "../../components/exercise/ExerciseCard";
import "../../styles/ExerciseCard.css";

const CorePage = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchExercises = async () => {
      const res = await fetch("/core");
      const data = await res.json();
      setExercises(data);
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

export default CorePage;
