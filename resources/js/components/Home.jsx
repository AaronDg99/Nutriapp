import React, { useState } from 'react';
import Menu from './Menu'; // Asegúrate de que la ruta sea correcta según la ubicación de tu archivo Menu.jsx
import Card from 'react-bootstrap/Card';

const Home = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [BMI, setBMI] = useState(null);
  const [recommendation, setRecommendation] = useState('');

  const calculateBMI = () => {
    if (weight > 0 && height > 0) {
      const heightInMeters = height / 100;
      const bmi = weight / (heightInMeters * heightInMeters);
      setBMI(bmi.toFixed(2));

      // Provide nutritional recommendations based on BMI
      // Provide nutritional recommendations based on BMI
      if (bmi < 18.5) {
        setRecommendation('Bajo peso - Puede ser beneficioso aumentar de peso con una dieta equilibrada y ejercicio adecuado.');
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        setRecommendation('Peso normal - Continúa manteniendo hábitos alimenticios saludables y un estilo de vida activo.');
      } else if (bmi >= 25 && bmi <= 29.9) {
        setRecommendation('Sobrepeso - Considera ajustar tu dieta y aumentar tu actividad física para lograr un peso más saludable.');
      } else {
        setRecommendation('Obesidad - Es importante consultar a un profesional de la salud para recibir asesoramiento y establecer un plan de dieta y ejercicio adecuado.');
      }
    } else {
      setBMI(null);
      setRecommendation('');
    }
  };

  return (
    <div className="container-fluid">
      <Menu /> {/* Aquí estás utilizando el componente Menu */}
      <h1 className="mt-4" class="text-muted">Bienvenido a nuestro sitio web</h1>
      <div className="mb-3">
        <label className="form-label">Peso (en kg):</label>
        <input
          type="number"
          className="form-control"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Altura (en cm):</label>
        <input
          type="number"
          className="form-control"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <button className="btn btn-primary mb-3" onClick={calculateBMI}>
        Calcular BMI
      </button>

      {BMI && recommendation && (
        <Card className="mt-3" text="white" style={{ backgroundColor: BMI < 18.5 ? '#007bff' : BMI >= 18.5 && BMI <= 24.9 ? '#28a745' : BMI >= 25 && BMI <= 29.9 ? '#ffc107' : '#dc3545' }}>
          <Card.Body>
            <Card.Title>Tu BMI: {BMI}</Card.Title>
            <Card.Text>{recommendation}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default Home;
