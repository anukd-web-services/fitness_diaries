// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// plain page (no sidebar)
import Exercises from "./pages/exe-blog/Exercises"; // ← make sure file‑name matches
// layout that contains the sidebar
import DashboardLayout from "./pages/users/DashboardLayout"; // ← we created this earlier

export default function App() {
  return (
    <Router>
      <Routes>
        {/*  plain route  */}
        <Route path="/exercises" element={<Exercises />} />

        {/*  dashboard route – shows collapsible sidebar  */}
        <Route path="/dashboard" element={<DashboardLayout />} />
      </Routes>
    </Router>
  );
}
