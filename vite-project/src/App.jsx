import { useState } from 'react'
import './App.css'
import './Navegacao.jsx'
import Navegacao from './Navegacao.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import ComponenteBusca from './components/ComponenteBusca.jsx'
import ShowCourseComponent from './components/ShowCourseComponent'
import UserCartComponent from './components/UserCartComponent'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cardapio from './Pages/Cardapio.jsx'


function App() {
  const [count, setCount] = useState(0)

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
