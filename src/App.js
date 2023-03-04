
import Nav from './Components/Nav'
import './App.css';
import Login from './Components/Login';
import useAuth from './hooks/useAuth';
import { Routes,Route } from 'react-router-dom';
import Signup from './Components/Signup';
import Hero from './Components/Hero';
import Permisiondenied from './Components/Permisiondenied';
function App() {
  const {API_url, islLoggedIn,setislLoggedIn} = useAuth()


  return (
    <>
       
      <Routes>
      <Route path="/" element={<Nav />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/hero" element={API_url?<Hero />:<Permisiondenied/>} />



      </Routes>
    </>
  );
}

export default App;
