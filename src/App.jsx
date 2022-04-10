import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainNavigation from './components/MainNavigation';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <MainNavigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
