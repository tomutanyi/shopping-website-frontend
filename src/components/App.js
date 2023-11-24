import React from 'react';
import About from './About/About';
import SignUp from './Signup/SignUp';

function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <About />
      <SignUp/>
    </div>
  );
}

export default App;