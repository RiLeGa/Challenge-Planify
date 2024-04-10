import React from 'react'
import { NavLink } from 'react-router-dom';

function BotoneraAvanzar({progreso, siguienteEtapa, etapaAnterior, confirmar}) {

  const avanzar = () =>
 {
    siguienteEtapa()
 }    

 const retroceder = () => 
 {
    etapaAnterior()
 }

 const confirmarTurno = () => {
    confirmar()
    alert("Turno confirmado")
    window.location.reload();
 }

 console.log("Progreso:", progreso); // Agrega este console.log para depurar
  return (
    <>
    
            {
              progreso < 40 ? <button style={{background:"none"}}></button> : <button onClick={retroceder}>Anterior</button>
            }
            {
              progreso < 80 ? <button onClick={avanzar}>Siguiente</button> : <button onClick={confirmarTurno}>Confirmar</button>
            }
    
    </>
  )
}

export default BotoneraAvanzar