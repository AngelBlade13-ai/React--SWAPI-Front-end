import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import Characters from './Pages/Characters';
import ViewCharacter from './Pages/ViewCharacter';
import Planets from './Pages/Planets';
import ViewPlanet from './Pages/ViewPlanet';
import Starships from './Pages/Starships';
import ViewStarship from './Pages/ViewStarship';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Characters" element={<Characters />} />
        <Route path="/ViewCharacter/:id" element={<ViewCharacter />} />
        <Route path="/Planets" element={<Planets />} />
        <Route path="/ViewPlanet/:id" element={<ViewPlanet />} />
        <Route path="/Starships" element={<Starships />} />
        <Route path="/ViewStarship/:id" element={<ViewStarship />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
