import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form submitted:', { username, password });
    fetch('https://shopping-database32.onrender.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((r) => {
        if (r.status === 200) {
          toast.success('Login successful!');
          navigate('/');
        } else {
          toast.error('Incorrect username or password');
        }
      });

    setUsername('');
    setPassword('');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96 p-8 bg-white shadow-md rounded-md">
        <h2 className="text-3xl font-bold mb-6">Login</h2>


        <form onSubmit={handleSubmit}>

          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600">
              Username
            </label>
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

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
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


          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
          <p className="mt-2">
            <Link to="/signup">Don't have an account? Sign up here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
