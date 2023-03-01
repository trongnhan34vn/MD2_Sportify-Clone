import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import HomePageLogin from './components/HomePage/HomePageLogin';
import PlayList from './components/Playlist/PlayList'
import Admin from './components/Admin/Admin';
import Login from './components/Login/Login';
import SignUp from './components/Sign Up/SignUp'
import Footer from './components/Footer/Footer';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePageLogin />} />
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
