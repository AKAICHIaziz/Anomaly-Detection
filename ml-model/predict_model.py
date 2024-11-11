import sys
import joblib
import numpy as np
import os

# Load the model without printing debug information
model_path = os.path.join(os.path.dirname(__file__), 'heart_disease_model.pkl')

try:
    model = joblib.load(model_path)
except Exception as e:
    print(f"Error loading model: {e}")
    sys.exit(1)

# Process features and make a prediction
features = np.array(sys.argv[1:], dtype=float).reshape(1, -1)
prediction = model.predict(features)[0]
print(prediction)  # Only print the prediction result
