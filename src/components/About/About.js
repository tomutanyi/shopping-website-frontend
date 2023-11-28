import React from 'react';
import shoppingImage from '../Images/shopping.jpg'; 

const About = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      
      <div className="w-1/2 p-8"> 
        <img
          src={shoppingImage} 
          alt="About Us"
          className="rounded-md"
          style={{ padding: '20px' }}
        />
      </div>

      <div className="w-1/2 p-8">
        <h2 className="text-4xl font-bold mb-4">About Us</h2>
        <p className="text-gray-700 mb-6">
          Welcome to our platform! We aim to provide a diverse range of products from various sellers,
          giving you the freedom to choose the best-suited items for your needs. Our platform
          also empowers you with the ability to perform detailed analyses on different sellers
          to make informed purchasing decisions.
        </p>

        <p className="text-gray-700 mb-6">
          We understand the importance of finding reliable sellers, and that's why we've
          integrated a comprehensive analysis feature. Explore user reviews, ratings, and
          other relevant data to ensure that you're making a well-informed choice when
          selecting your desired products.
        </p>

        <p className="text-gray-700">
          Join us on this journey as we strive to make your online shopping experience
          seamless, enjoyable, and tailored to your preferences.
        </p>
      </div>
    </div>
  );
};

export default About;