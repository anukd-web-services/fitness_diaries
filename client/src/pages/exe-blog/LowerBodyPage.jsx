import React, { useEffect, useState } from "react";
import ExerciseCard from "../../components/exercise/ExerciseCard";
import "../../styles/ExerciseCard.css";

const LowerBodyPage = () => {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const res = await fetch("http://localhost:8080/upperbody");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setExercises(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchExercises();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

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

export default LowerBodyPage;
