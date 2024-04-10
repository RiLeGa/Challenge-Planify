import React, { useEffect, useState } from "react";

function ConfirmarTurno() {
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
        <div className='contMisTurnos'>
            <h2>Servicio: {especialidadSeleccionada}</h2>
            <h2>Fecha: {fecha}  {horarioDelTurno}</h2>
        </div>
    )
}

export default ConfirmarTurno;
