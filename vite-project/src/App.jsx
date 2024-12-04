import { useState } from 'react'
import './App.css'
import './navbar.jsx'
import CollapsibleExample from './navbar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CollapsibleExample/>
    </>
  )
}

export default App
