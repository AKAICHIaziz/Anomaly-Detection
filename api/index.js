// server/index.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { spawn } = require('child_process');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Prediction endpoint
app.post('/predict', (req, res) => {
  const features = req.body.features; // Array of feature values from client

  // Convert features to strings to pass as arguments
  const pythonProcess = spawn('python', ['../ml-model/predict_model.py', ...features.map(String)]);

  pythonProcess.stdout.on('data', (data) => {
    const prediction = data.toString().trim();
    res.json({ prediction });
  });

  pythonProcess.stderr.on('data', (data) => {
    console.error(`Error: ${data}`);
    res.status(500).send("Error in prediction");
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
