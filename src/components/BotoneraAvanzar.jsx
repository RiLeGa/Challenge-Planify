import React from 'react'
import Swal from 'sweetalert2'

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
    Swal.fire({
      position: "top",
      icon: "success",
      title: "Turno confirmado",
      showConfirmButton: false,
      timer: 1500,
      didClose: () => {
        window.location.href = "/";
    }
    })
 }

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