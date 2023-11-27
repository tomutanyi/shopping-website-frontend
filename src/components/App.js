
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

import Navbar from './landing/navbar/Navbar';
import Hero from './landing/hero/Hero';
import TopVendors from './landing/top-vendors/TopVendors';
import CustomerReviews from './landing/customer-reviews/CustomerReviews';
import Footer from './landing/footer/Footer';

function App() {
  return (
   <div className='bg-gray-100'>
    <Navbar />
    <Hero />
    <TopVendors />
    <CustomerReviews />
    <Footer />
   </div>

  );
}

export default App;
