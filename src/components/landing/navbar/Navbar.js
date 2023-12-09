import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ user, onLogout }) {
  return (
    <div className="bg-blue-500 text-white p-5 rounded-lg">
      <nav className="w-full flex flex-wrap justify-between">
        <div className="w-1/2 py-4 flex flex-row justify-between px-5">
          {user ? (
            <div>
              {console.log(user)}
              <p style={{ color: 'black' }}>Welcome, {user.username}!</p>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="w-1/2 py-4 flex flex-row justify-between px-5">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/products">Products</NavLink>
          {user ? (
            <button className="px-2 bg-none hover:bg-blue-700 hover:text-white hover:cursor-pointer rounded-lg" onClick={onLogout}>
              Logout
            </button>
          ) : (
            <div className="flex flex-row justify-end">
              {!user && <NavLink to="/signup">Sign Up</NavLink>}
              {!user && <NavLink to="/login">Login</NavLink>}
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

function NavLink({ to, children }) {
  return (
    <div>
      <Link
        to={to}
        className="bg-none p-2 hover:bg-blue-700 hover:text-white hover:cursor-pointer rounded-lg"
      >
        {children}
      </Link>
    </div>
  );
}

export default Navbar;
