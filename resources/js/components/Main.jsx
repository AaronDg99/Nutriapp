import Login from './Login';
import { Routes, Route, Navigate } from 'react-router-dom';
import Register from './Register';
import Home from './Home';

function Main() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
}

export default Main;
