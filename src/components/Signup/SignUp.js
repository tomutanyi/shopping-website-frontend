import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('');

  let navigate = useNavigate()

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform actions on form submission sending data to server
    console.log('Form submitted:', { username, email, password });
    fetch('https://shopping-database32.onrender.com/signup', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      })
    })
    .then(r=>{
      if (r.status === 201){
        toast.success("Account created successfully!")
        navigate("/login")
      } else{
        toast.error("Error in account registration!")
      }
    })

    // Clear form fields after submission 
    setEmail('');
    setUsername('');
    setPassword('');

    // toast.success('Sign up successful.')
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96 p-8 bg-white shadow-md rounded-md">
        <h2 className="text-3xl font-bold mb-6">Sign Up</h2>

        {/* Sign Up Form */}
        <form onSubmit={handleSubmit}>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Username Field */}
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600">Username</label>
            <input
              type="text"
              id="username"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>


          {/* Password Field */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-600">Password</label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Sign Up
          </button>
          <p className='mt-2'><Link to='/login'>Already Registered? <span className='text-blue-500 ml-2'>Log in Here</span></Link></p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
