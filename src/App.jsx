import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingSpinner from './UI/LoadingSpinner';

const Home = React.lazy(() => import('./pages/Home'));
const AboutUs = React.lazy(() => import('./pages/AboutUs'));
const Specials = React.lazy(() => import('./pages/Specials'));
const Services = React.lazy(() => import('./pages/Services'));

function App() {
  return (
    <div className='App'>
      <React.StrictMode>
        <BrowserRouter>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<AboutUs />} />
              <Route path='/specials' element={<Specials />} />
              <Route path='/services' element={<Services />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </React.StrictMode>
    </div>
  );
}

export default App;
