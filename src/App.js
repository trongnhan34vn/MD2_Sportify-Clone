import logo from './logo.svg';
import './App.css';
import HomePage from './Page/HomePage';
import { Routes, Route } from 'react-router-dom';
import HomePageLogin from './Page/HomePageLogin';
import Login from './Page/Login';
import SignUp from './Page/SignUp';
import PlayList from './Page/PlayList'
import Admin from './Page/Admin';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/homepage' element={<HomePageLogin />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/playlist' element={<PlayList />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
