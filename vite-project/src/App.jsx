import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cardapio from './Pages/Cardapio.jsx'
import  Navbar  from './components/Navegacao.jsx'
import Login from './Pages/Login.jsx'
import Home from './Pages/Home.jsx'





function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Cardapio" element={<Cardapio />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
      
    </Router>
  )
}

export default App
