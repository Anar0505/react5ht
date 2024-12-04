import React, { useState } from 'react'
import './style,.css'
function Bmi() {const [weight, setWeight] = useState('');
const [height, setHeight] = useState('');
const [bmi, setBmi] = useState(null);
const [category, setCategory] = useState('');

const calculateBMI = () => {
  const heightInMeters = height / 100;
  const bmiValue = weight / (heightInMeters * heightInMeters)

  setBmi(bmiValue.toFixed(2))

  if (bmiValue < 18.5) {
    setCategory('Underweight');
  } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
    setCategory('Normal weight');
  } else if (bmiValue >= 25 && bmiValue < 29.9) {
    setCategory('Overweight');
  } else {
    setCategory('Obesity');
  }
};

return (
  <div className="bmi-container">
    <h1>BMI Kalkulyatoru</h1>
    <div className="input-container">
      <label htmlFor="weight">Çəki (kg):</label>
      <input
        type="number"
        id="weight"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        placeholder="Kilogram"
      />
    </div>
    <div className="input-container">
      <label htmlFor="height">Boy (cm):</label>
      <input
        type="number"
        id="height"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        placeholder="Santimetr"
      />
    </div>
    <button onClick={calculateBMI}>Hesabla</button>

    {bmi && (
      <div className="result">
        <h2>BMI: {bmi}</h2>
        <p>Kateqoriya: {category}</p>
      </div>
    )}
  </div>
);
}

export default Bmi