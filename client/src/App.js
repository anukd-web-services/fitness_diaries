// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Exercises from './pages/exe-blog/Exercises';
import ExerciseCategories from './pages/exe-blog/ExerciseCategories'; 

// layout that contains the sidebar
import DashboardLayout from "./pages/users/DashboardLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/cards" element={<ExerciseCategories />} /> 
        <Route path="/exercises" element={<Exercises />} />
               {/* Dashboard route – shows collapsible sidebar */}
        <Route path="/dashboard" element={<DashboardLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
