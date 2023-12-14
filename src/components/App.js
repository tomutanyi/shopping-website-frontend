import {useState, useEffect} from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import About from './About/About';
import SignUp from './Signup/SignUp';
import Login from './Login/Login';
import Landing from './landing/Landing';
import NotFound from './NotFound/NotFound';
import Home from './landing/home/Home';
import Products from './Product/ Products';
import toast, {Toaster} from 'react-hot-toast';
import History from './Histories/History';
import { AuthProvider } from './Histories/AuthContext';
import Reviews from './Review/Reviews';

function App() {
  const [user, setUser] = useState(null)

  const navigate = useNavigate();
  

  useEffect(()=>{
    fetch('http://127.0.0.1:5000/session', {
      credentials: 'include'
    })
    .then((r)=>{
      if (r.ok){
       return r.json();
      }
      throw new Error('User not authenticated');
    })
    .then((userData)=>setUser(userData))
    .catch((e)=>{
      console.error('Session check error: ', e);
      setUser(null)
    })
  }, []);

  console.log(user)


  function handleLogIn(user){
    setUser(user)
  }

  function handleLogout(){
    fetch('http://127.0.0.1:5000/logout', {
      method: "DELETE"
    })
    .then(toast.success("Logged out successfully!"))
    .then(setUser(null))
    .then(navigate('/'))
  }

  return (
   <AuthProvider>
    <>
      <Toaster position='top-right' />
        <Routes>
          <Route element={<Landing user={user} onLogout={handleLogout} />}>
            <Route path='/' element={<Home />} />
            <Route path='/home' lement={<Home />} />
            <Route path='/about' element={<About />}/>
            <Route path='/products' element={<Products />} />
            <Route path='/signup' element={<SignUp />}/>
            <Route path='/history' element={<History />}/>
            <Route path='/login' element={<Login onLogin={handleLogIn} />} />
            <Route path="/reviews" element={<Reviews />} />
          
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </>
   </AuthProvider>
  );
}

export default App;
