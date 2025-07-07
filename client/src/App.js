// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

<<<<<<< HEAD
// plain page (no sidebar)
import Exercises from "./pages/exe-blog/Exercises"; // ← make sure file‑name matches
// layout that contains the sidebar
import DashboardLayout from "./pages/users/DashboardLayout"; // ← we created this earlier

export default function App() {
=======

function App() {
>>>>>>> af12fba4853f1a808073e5a81ffa1b3960f23fda
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
              </Routes>
    </Router>
  );
}


export default App;
