// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// plain page (no sidebar)
import Exercises from "./pages/exe-blog/Exercises";
// layout that contains the sidebar
import DashboardLayout from "./pages/users/DashboardLayout";

function App() {
  return (
    <Router>
      <Routes>
        {/* Plain route */}
        <Route path="/exercises" element={<Exercises />} />

        {/* Dashboard route – shows collapsible sidebar */}
        <Route path="/dashboard" element={<DashboardLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
