// src/pages/exe-blog/ExerciseCategories.js
import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ExerciseCategoryCard from '../../components/exercise/ExerciseCategoryCard.jsx'; // Ensure this path is correct

const categories = [
  {
    title: "Upper Body",
    description: "Build strength in chest, shoulders & arms.",
    image: "https://www.mensfitness.com/.image/w_1080,q_auto:good,c_fill,ar_4:3/MjEyNDIwODk2Nzg5Mzc0NTky/body-builder-training-in-industrial-urban-gym.jpg",
  },
  {
    title: "Lower Body",
    description: "Boost strength in legs and glutes power.",
    image: "https://www.eatthis.com/wp-content/uploads/sites/4/2023/03/muscular-man-leg-press.jpg?quality=82&strip=1",
  },
  {
    title: "Core",
    description: "Enhance your core and abs stability.",
    image: "https://hips.hearstapps.com/hmg-prod/images/young-muscular-build-athlete-exercising-strength-in-royalty-free-image-1706546541.jpg?crop=0.668xw:1.00xh;0.107xw,0&resize=640:*",
  },
  {
    title: "Full Body",
    description: "Engage all major muscle groups effectively.",
    image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1",
  },
  {
    title: "Cardio",
    description: "Boost endurance, stamina, and heart health.",
    image: "https://blog.nasm.org/hubfs/steady-state-cardio-blog-image.jpg",
  },
];


const ExerciseCategories = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (!current) return;
    const scrollAmount = current.offsetWidth * 0.8;
    current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="carousel-wrapper">
      <h2 className="carousel-heading">Exercise Categories</h2>
      <div className="carousel-controls">
        <button className="carousel-arrow left" onClick={() => scroll("left")}>
          <FaChevronLeft />
        </button>
        <div className="carousel-scroll" ref={scrollRef}>
          {categories.map((category, index) => (
            <ExerciseCategoryCard key={index} {...category} />
          ))}
        </div>
        <button className="carousel-arrow right" onClick={() => scroll("right")}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default ExerciseCategories;