import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Welcome from './Pages/Welcome'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from './Pages/Login';




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Welcome/>}/>
      <Route path='/login' element={<Login/>}/>
     </Routes>
     
     </BrowserRouter>

    </>
  )
}

export default App
