// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Exercises from './pages/exercises';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/exercises" element={<Exercises />} />
      </Routes>
    </Router>
  );
}

export default App;
