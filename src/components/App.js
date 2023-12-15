import {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import About from './About/About';
import SignUp from './Signup/SignUp';
import Login from './Login/Login';
import Landing from './landing/Landing';
import NotFound from './NotFound/NotFound';
import Home from './landing/home/Home';
import Products from './Product/products';
import Allreviews from './Allreviews/Allreviews';
import History from './History/history';
import toast, {Toaster} from 'react-hot-toast'

function App() {
  const [user, setUser] = useState(null)

  const navigate = useNavigate();
  

  useEffect(()=>{
    fetch('https://shopping-database32.onrender.com/session')
    .then((r)=>{
      if (r.ok){
        r.json()
        .then((user)=>setUser(user))
      }
    });
  }, []);


  function handleLogIn(user){
    setUser(user)
  }

  function handleLogout(){
    fetch('https://shopping-database32.onrender.com/logout', {
      method: "DELETE"
    })
    .then(toast("Logged out successfully!"))
    .then(setUser(null))
    .then(navigate('/'))
  }

  return (
    <>
      <Toaster position='top-right' />
        <Routes>
          <Route element={<Landing user={user} onLogout={handleLogout} />}>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />}/>
            <Route path='/allreviews' element={<Allreviews />} />
            <Route path='/Products' element={<Products user={user} />} />
            <Route path="/history" element={<History userId={user ? user.id : null} />} />
            <Route path='/signup' element={<SignUp />}/>
            <Route path='/login' element={<Login onLogin={handleLogIn} />} />
          
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </>
  );
}

export default App;