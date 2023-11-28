import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import About from './About/About';
import SignUp from './Signup/SignUp';
import Login from './Login/Login';
import Navbar from './landing/navbar/Navbar';
import Hero from './landing/hero/Hero';
import TopVendors from './landing/top-vendors/TopVendors';
import CustomerReviews from './landing/customer-reviews/CustomerReviews';
import Footer from './landing/footer/Footer';

function App() {
  return (
    <BrowserRouter>
      
      <Navbar />

      <Routes>
       
        <Route path="/" element={<Navigate to="/landing" />} />
        <Route path="/About" element={<About />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route
          path="/landing"
          element={
            <div className='bg-gray-100'>
              <Hero />
              <TopVendors />
              <CustomerReviews />
              <Footer />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
