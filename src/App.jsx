import React, { useEffect, useState } from "react"
import { Route, BrowserRouter, Routes} from 'react-router-dom'
import './App.css'
import Index from "./pages/Index"
import Reservas from "./pages/Reservas"
import MisTurnos from "./pages/MisTurnos"
import NavBar from "./components/NavBar"
import ProgressBar from "./components/ProgressBar"
import BotoneraAvanzar from "./components/BotoneraAvanzar"

function App() {
  
  return (
    <>
      <div className="contPrinc">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Index/>}/>
            <Route path='/Reservas' element={<Reservas/>}/>
            <Route path='/MisTurnos' element={<MisTurnos/>}/>
          </Routes>
          <div className='navBar'>
            <NavBar/>
          </div>
      </BrowserRouter>
      </div>
    </>
  )
}

export default App
