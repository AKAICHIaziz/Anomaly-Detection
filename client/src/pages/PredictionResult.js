// src/pages/PredictionResult.js
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './PredictionResult.css';

const PredictionResult = () => {
  const location = useLocation();
  const prediction = location.state?.prediction;

  return (
    <div className="result-container">
      <h1>Prediction Result</h1>
      <p className="result-text">
        {prediction !== 'Error in prediction'
          ? `The prediction result is: ${prediction}`
          : 'An error occurred while processing the prediction.'}
      </p>
      <Link to="/" className="back-link">Make Another Prediction</Link>
    </div>
  );
};

export default PredictionResult;
