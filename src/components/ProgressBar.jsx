import React, { useEffect, useState } from 'react'

function ProgressBar({progreso}) {
  console.log("Progreso:", progreso); // Agrega este console.log para depurar

  useEffect(() => {
    const especialidadSeleccionada = sessionStorage.getItem('especialidadSeleccionada');
    const horarioDelTurno = sessionStorage.getItem('horarioDelTurno');
    if (especialidadSeleccionada && horarioDelTurno) {
        console.log("Se ha recuperado la especialidad seleccionada:", especialidadSeleccionada);
        console.log("En el siguiente horario:", horarioDelTurno);
    }
},[]);
  
  return (
        <>
          
           <div style={{ width: `${progreso}%`, padding:"0 5px", borderRadius: "10px", backgroundColor: '#349592', height: '14px', transition: 'width 0.5s' }}></div>
          
        </>
  )
}

export default ProgressBar