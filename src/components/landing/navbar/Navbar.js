import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="bg-blue-500 text-white p-5 rounded-lg">
      <nav className='w-full flex flex-wrap justify-between'>
        <div className='w-1/2'></div>
        <div className='w-1/2 py-4 flex flex-row justify-between px-5'>
          <div>
            <Link to="/" className='bg-none p-2 hover:bg-blue-700 hover:text-white hover:cursor-pointer rounded-lg'>Home</Link>
          </div>
          <div>
            <Link to="/about" className='bg-none p-2 hover:bg-blue-700 hover:text-white hover:cursor-pointer rounded-lg'>About Us</Link>
          </div>
          <div>
            <Link to="/signup" className='bg-none p-2 hover:bg-blue-700 hover:text-white hover:cursor-pointer rounded-lg'>Sign Up</Link>
          </div>
          <div>
            <Link to="/login" className='bg-none p-2 hover:bg-blue-700 hover:text-white hover:cursor-pointer rounded-lg'>Login</Link>
          </div>
          <div>
            <Link to="/Products" className='bg-none p-2 hover:bg-blue-700 hover:text-white hover:cursor-pointer rounded-lg'>Products</Link>
          </div>
        </div>
        {/* <div className='w-1/2 flex items-center justify-end p-5'>
          <div className='flex'>
            <input
              className="appearance-none bg-transparent border-b-2 w-full mr-3 py-1 px-2 leading-tight focus:outline-none text-white"
              type="email"
              placeholder="example@email.com"
              aria-label="Email address"
            />
            <button
              className="flex-shrink-0 bg-transparent hover:bg-white hover:text-blue-500 border text-sm text-white py-1 px-2 rounded"
              type="button"
            >
              Search Item
            </button>
          </div>
        </div> */}
      </nav>
    </div>
  );
}

export default Navbar;

