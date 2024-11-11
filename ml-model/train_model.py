# model/train_model.py
import os
import pandas as pd
import joblib
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier

current_dir = os.path.dirname(os.path.abspath(__file__))
data_path = os.path.join(current_dir, 'heart.csv')
# Load the data
data = pd.read_csv(data_path)

# Preprocessing
features = data.drop(columns=['target'])
target = data['target']

scaler = StandardScaler()
scaled_features = scaler.fit_transform(features)

# Split the data
X_train, X_test, y_train, y_test = train_test_split(scaled_features, target, test_size=0.35, random_state=42)

# Train the model
model = RandomForestClassifier()
model.fit(X_train, y_train)

# Save the model and scaler
joblib.dump(model, 'heart_disease_model.pkl')
joblib.dump(scaler, 'scaler.pkl')
