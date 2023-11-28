import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './About/About';
import SignUp from './Signup/SignUp';
import Login from './Login/Login';
import Landing from './landing/Landing';
import NotFound from './NotFound/NotFound';
import Home from './landing/home/Home';
import Products from './Products/Products';
import {Toaster} from 'react-hot-toast'

function App() {
  return (
    <BrowserRouter>
    <Toaster position='top-right' />
      <Routes>
        <Route element={<Landing />}>
          <Route path='/' element={<Home />} />
          <Route path='/home' lement={<Home />} />
          <Route path='/about' element={<About />}/>
          <Route path='/products' element={<Products />} />
          <Route path='/signup' element={<SignUp />}/>
          <Route path='/login' element={<Login />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
