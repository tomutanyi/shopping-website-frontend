import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import About from './About/About';
import SignUp from './Signup/SignUp';
import Login from './Login/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/About" />} />
        <Route path="/About" element={<About />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
