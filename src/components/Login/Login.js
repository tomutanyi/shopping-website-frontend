import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
// import bcrypt from 'bcryptjs';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const hashedPassword = bcrypt.hashSync(password, 12);
    // const decodedHash = bcrypt.getRounds(hashedPassword);

    // console.log('Hashed Password:', hashedPassword);
    // console.log('Decoded Hash:', decodedHash);

    fetch('https://shopping-database32.onrender.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password, // Send the hashed password to the server
      }),
    })
      .then((r) => {
        if (r.status === 200) {
          return r.json().then((user) => {
            navigate('/products');
            toast.success('Logged in successfully');
            onLogin(user);
          });
        } else {
          toast.error('Error Logging In');
        }
      })
      .catch((e) => console.log(e));

    // Clear form fields after submission
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96 p-8 bg-white shadow-md rounded-md">
        <h2 className="text-3xl font-bold mb-6">Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">
              Email
            </label>
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
            <Link to="/signup">
              Not yet Registered? <span className="text-blue-500 ml-2">Register here</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
