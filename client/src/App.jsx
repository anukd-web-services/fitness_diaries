import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ExercisesPage from "./pages/exe-blog/ExercisesPage";
import ExerciseCategories from "./pages/exe-blog/ExerciseCategories";
import DashboardLayout from "./pages/users/DashboardLayout";
import About from "./components/about/About.jsx";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/cards" element={<ExerciseCategories />} />
        <Route path="/exercises" element={<ExercisesPage />} />
        {/* Dashboard route – shows collapsible sidebar */}
        <Route path="/dashboard" element={<DashboardLayout />} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </Router>
  );
}

export default App;
