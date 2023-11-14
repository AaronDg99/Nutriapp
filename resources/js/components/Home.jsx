import React, { useState } from 'react';
import Menu from './Menu'; // Asegúrate de que la ruta sea correcta según la ubicación de tu archivo Menu.jsx
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


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
      <Menu /> 
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
       <div className="container">
        <div className="row">
            <div className="col-md-6">
            <div className="card mb-3">
                <img
                src="https://cdn.pixabay.com/photo/2017/08/06/12/52/woman-2592247_1280.jpg"
                alt="Imagen 2"
                className="card-img-top"
                style={{ maxWidth: '100%', height: '350px' }}
                />
                <div className="card-body">
                <h5 className="card-title">Problemática</h5>
                <p className="card-text">
                La importancia del ejercicio va más allá de los beneficios físicos y mentales individuales, ya que tiene un impacto positivo en la sociedad en general. La promoción de estilos de vida activos puede reducir la carga de enfermedades crónicas, disminuir los costos de atención médica y fomentar comunidades más saludables y activas. En resumen, la incorporación regular de actividad física en la rutina diaria es esencial para alcanzar y mantener un óptimo estado de salud a nivel personal y comunitario.
                </p>
                </div>
            </div>
            </div>
            <div className="col-md-6">
            <div className="card mb-3">
                <img
                src="https://media.istockphoto.com/id/1433432507/es/foto/alimentaci%C3%B3n-saludable-plato-con-comida-vegana-o-vegetariana-en-manos-de-mujer-dieta-saludable.jpg?s=612x612&w=0&k=20&c=KQaj9U__Z-7dQODXbv72v3N0yua2NPXf487uc0Xrxvw="
                alt="Imagen 2"
                className="card-img-top"
                style={{ maxWidth: '100%', height: '350px' }}
                />
                <div className="card-body">
                <h5 className="card-title">Problemática</h5>
                <p className="card-text">
                La nutrición desempeña un papel fundamental en el mantenimiento de la salud y el bienestar humano. Una alimentación equilibrada proporciona al cuerpo los nutrientes esenciales, como vitaminas, minerales, proteínas, grasas y carbohidratos, necesarios para el funcionamiento óptimo de los sistemas biológicos. Además, una dieta adecuada contribuye a prevenir enfermedades crónicas, fortalece el sistema inmunológico y favorece un desarrollo físico y mental saludable a lo largo de todas las etapas de la vida.
                </p>
                </div>
            </div>
            </div>
           </div>
           </div>
    </div>
    
  );
};

export default Home;
