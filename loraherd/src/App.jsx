import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from './loginpage'; 
import LocalisationAnimaux from './localisationanimaux';
// import GestionAnimaux from './gestionanimaux'; 
import AnimalForm from './animalform';
// import Animal from './animal';
import SignUp from './signup'; 
import './App.css'

function App() {
  
  return (
  
    <>
  
     <SignUp /> 
    <Router>
      <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<signUp />} />
      <Route path="/animalform" element={<AnimalForm />} />
      <Route path="/localisationanimaux" element={<LocalisationAnimaux/>} />
      {/* <Route path="/animal" element={<Animal />} /> */}
      {/* <Route path="/gestionanimaux" element={<GestionAnimaux />} /> */}
      {/* <Route path="/division" element={<FicheDePoste />} /> */}
      </Routes>
    </Router>
     
    </>
  )
}

export default App




// const App = () => {
 