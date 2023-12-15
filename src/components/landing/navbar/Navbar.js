import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ user, onLogout }) {
  return (
    <div className="bg-blue-500 text-white p-15 rounded-lg">
      <nav className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 py-4 flex flex-row justify-between md:px-5">
          {user ? (
            <div>
              <p>Welcome, {user.username}</p>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="md:w-1/2 py-4 flex flex-col md:flex-row justify-between md:px-5">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/products">Products</NavLink>
          {user ? (
            <>
              <NavLink to="/history">Search History</NavLink>
              <NavLink to="/allreviews">All Reviews</NavLink>
              <button
                className="px-2 bg-none hover:bg-blue-700 hover:text-white hover:cursor-pointer rounded-lg"
                onClick={onLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <div className="flex flex-col md:flex-row justify-end items-center md:items-start md:ml-4 mt-4 md:mt-0">
              <NavLink to="/signup">Sign Up</NavLink>
              <NavLink to="/login">Login</NavLink>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

function NavLink({ to, children }) {
  return (
    <div className="mb-2 md:mb-0">
      <Link
        to={to}
        className="bg-none p-2 hover:bg-blue-700 hover:text-white hover:cursor-pointer rounded-lg block md:inline-block"
      >
        {children}
      </Link>
    </div>
  );
}

export default Navbar;
