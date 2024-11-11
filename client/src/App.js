// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PredictionForm from './pages/PredictionForm';
import PredictionResult from './pages/PredictionResult';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PredictionForm />} />
        <Route path="/result" element={<PredictionResult />} />
      </Routes>
    </Router>
  );
}

export default App;
