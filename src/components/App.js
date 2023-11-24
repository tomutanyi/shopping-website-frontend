import React from 'react';
import About from './About/About';
import SignUp from './Signup/SignUp';
import Login from './Login/Login';

function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      {/* <About />
      <SignUp/> */}
      <Login />
    </div>
  );
}

export default App;