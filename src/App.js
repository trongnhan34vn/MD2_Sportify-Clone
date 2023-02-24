import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import { Routes, Route } from 'react-router-dom';
import HomePageLogin from './components/HomePage/HomePageLogin';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePageLogin />} />
      </Routes>
    </div>
  );
}

export default App;
