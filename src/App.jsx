import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Ceh from './components/Ceh';
import AboutUs from './CehComponents/AboutUs';
import Academics from './CehComponents/Academics';
import NotFound from './NotFound';
import Library from './CehComponents/Library';

function App() {
  return (
    <BrowserRouter>
      <div className='w-screen h-screen'>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ceh" element={<Ceh/>}>
             <Route path="about-us" element={<AboutUs/>}/>
             <Route path="academics" element={<Academics/>}/>
             <Route path="library" element={<Library/>}/>
          </Route>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
