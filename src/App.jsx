import { useState } from 'react'
import Navbar from './component/navbar'
import { BrowserRouter } from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
   <Navbar/>
   </BrowserRouter>
  )
}

export default App
