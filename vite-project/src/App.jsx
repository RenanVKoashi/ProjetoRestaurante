import { useState } from 'react'
import './App.css'
import './components/Navegacao.jsx'
import Navegacao from './components/Navegacao.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cardapio from './Pages/Cardapio.jsx'



function App() {

  return (
    <>
    <Router>
      <Navegacao />
      <Routes>
        <Route path="/Cardapio" element={<Cardapio />} />
      </Routes>
    </Router>

    </>
  )
}

export default App
