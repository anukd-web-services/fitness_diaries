import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ExerciseCategories from "./pages/exe-blog/ExerciseCategories";
import DashboardLayout from "./pages/users/DashboardLayout";

import UpperBodyPage from "./pages/exe-blog/UpperBodyPage";
import LowerBodyPage from "./pages/exe-blog/LowerBodyPage";
import CardioPage from "./pages/exe-blog/CardioPage";
import CorePage from "./pages/exe-blog/CorePage";
import FullBodyPage from "./pages/exe-blog/FullBodyPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/cards" element={<ExerciseCategories />} />
        <Route path="/dashboard" element={<DashboardLayout />} />

        {/* Exercise Category Pages */}
        <Route path="/upperbody" element={<UpperBodyPage />} />
        <Route path="/lowerbody" element={<LowerBodyPage />} />
        <Route path="/cardio" element={<CardioPage />} />
        <Route path="/core" element={<CorePage />} />
        <Route path="/fullbody" element={<FullBodyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
