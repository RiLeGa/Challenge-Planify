import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <>
        <NavLink className="opcionNavBar" to="/Reservas"> <i className="fa-solid fa-mug-hot"></i> Reservar</NavLink>
        <NavLink className="opcionNavBar" to="/MisTurnos"> <i className="fa-solid fa-mug-hot"></i> Mis Turnos</NavLink>
    </>
  )
}

export default NavBar