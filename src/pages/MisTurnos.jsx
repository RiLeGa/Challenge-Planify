import React, { useEffect, useState } from 'react'

function MisTurnos() {
  const [especialidadSeleccionada, setEspecialidadSeleccionada] = useState("");
    const [fecha, setFecha] = useState("")
    const [horarioDelTurno, setHorarioDelTurno] = useState("");

    useEffect(() => {
        const especialidad = sessionStorage.getItem('especialidadSeleccionada');
        const fecha = sessionStorage.getItem('fechaDeTurno');
        const horario = sessionStorage.getItem('horarioDelTurno');
        setEspecialidadSeleccionada(especialidad || "");
        setFecha(fecha || "")
        setHorarioDelTurno(horario || "");
    }, []);

  return (
    <>
    <h1>Mis Turnos</h1>
    <div className='contMisTurnos'>
        Su Proximo turno es:
          <h2>Fecha del turno: {fecha}</h2>
          <h2>Horario del Turno: {horarioDelTurno}</h2>
          <h2>Especialidad Seleccionada: {especialidadSeleccionada}</h2>
      </div>
    </>
  )
}

export default MisTurnos