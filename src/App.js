import logo from './logo.svg';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import HomePageLogin from './components/HomePage/HomePageLogin';
import PlayList from './components/Playlist/PlayList'
import Admin from './components/Admin/Admin';
import Login from './components/Login/Login';
import SignUp from './components/Sign Up/SignUp'
import Footer from './components/Footer/Footer';
import Home from './components/HomePage/Home';
import { useEffect } from 'react';

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0,0)
  },[location.pathname])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playlist" element={<PlayList />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
