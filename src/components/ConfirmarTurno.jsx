import React, { useEffect, useState } from "react";

function ConfirmarTurno() {
    const [especialidadSeleccionada, setEspecialidadSeleccionada] = useState("");
    const [horarioDelTurno, setHorarioDelTurno] = useState("");

    useEffect(() => {
        const especialidad = sessionStorage.getItem('especialidadSeleccionada');
        const horario = sessionStorage.getItem('horarioDelTurno');
        setEspecialidadSeleccionada(especialidad || "");
        setHorarioDelTurno(horario || "");
    }, []);

    return (
        <div>
            <h2>Especialidad Seleccionada: {especialidadSeleccionada}</h2>
            <h2>Horario del Turno: {horarioDelTurno}</h2>
        </div>
    )
}

export default ConfirmarTurno;
