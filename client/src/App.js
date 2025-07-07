// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Exercises from './pages/exe-blog/exercises';
import ExerciseCategories from './pages/exe-blog/ExerciseCategories'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/cards" element={<ExerciseCategories />} /> 
        <Route path="/exercises" element={<Exercises />} />
      </Routes>
    </Router>
  );
}

export default App;
