// src/pages/PredictionForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './PredictionForm.css';

const PredictionForm = () => {
  const [formData, setFormData] = useState(Array(13).fill(''));
  const navigate = useNavigate();

  const handleInputChange = (index, event) => {
    const newFormData = [...formData];
    newFormData[index] = event.target.value;
    setFormData(newFormData);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/predict', {
        features: formData.map(Number),
      });
      navigate('/result', { state: { prediction: response.data.prediction } });
    } catch (error) {
      console.error("Error making prediction:", error);
      navigate('/result', { state: { prediction: 'Error in prediction' } });
    }
  };

  return (
    <div className="form-container">
      <h1>Heart Disease Prediction</h1>
      <p>Enter the required values for each feature to predict the possibility of heart disease.</p>
      <form onSubmit={handleSubmit} className="prediction-form">
        <div className="form-grid">
          {formData.map((value, index) => (
            <div key={index} className="form-group">
              <label>Feature {index + 1}</label>
              <input
                type="number"
                value={value}
                onChange={(e) => handleInputChange(index, e)}
                required
              />
            </div>
          ))}
        </div>
        <button type="submit" className="submit-button">Predict</button>
      </form>
    </div>
  );
};

export default PredictionForm;
