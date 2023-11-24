import React, { useState } from 'react';

const SignUp = () => {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform actions on form submission sending data to server
    console.log('Form submitted:', { name, email, password });

    // Clear form fields after submission 
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    
  );
};

export default SignUp;
