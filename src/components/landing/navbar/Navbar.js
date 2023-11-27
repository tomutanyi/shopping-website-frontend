import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.webp';

function Navbar() {
  return (
    <div className="flex p-5">
      <div className="w-1/12">
        <img src={logo} className="w-20 h-20 mr-5" alt=''/>
      </div>
      <nav className='w-full flex flex-wrap justify-between'>
        <div className='w-1/2 py-4 flex flex-row justify-between px-5'>
          <div>
            <Link to="/landing" className='bg-blue-100 p-2 hover:bg-blue-500 hover:text-white hover:cursor-pointer rounded-lg'>Products</Link>
          </div>
          <div>
            <Link to="/About" className='bg-blue-100 p-2 hover:bg-blue-500 hover:text-white hover:cursor-pointer rounded-lg'>About Us</Link>
          </div>
          <div>
            <Link to="/Login" className='bg-blue-100 p-2 hover:bg-blue-500 hover:text-white hover:cursor-pointer rounded-lg'>Login</Link>
          </div>
        </div>
        <div className='w-1/2 flex items-center justify-end p-5'>
          <div className='flex'>
            <input
              className="appearance-none bg-transparent border-b-2 w-full mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="email"
              placeholder="example@email.com"
              aria-label="Email address"
            />
            <button
              className="flex-shrink-0 bg-transparent hover:bg-transparent hover:text-black border text-sm text-black py-1 px-2 rounded"
              type="button"
            >
              Search Item
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
