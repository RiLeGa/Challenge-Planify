import React, { useEffect, useState } from 'react'

function Horarios({horarioSeleccionado}) {
    const url = 'src/data/horarios.json';
  const [horarios, setHorarios] = useState([]);

    const fetchApi = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setHorarios(data)
            console.log(data.availableTimeslots);
        } catch (error) {
            console.error('Error al cargar categorías:', error);
        }
    };
    
    const seleccionarHorario = (horario) => {
        sessionStorage.setItem("horarioDelTurno", horario)
        horarioSeleccionado()
    }
    
    useEffect(() => {
        fetchApi();
    }, []);
     
    return (
        <>
            <h4>Proximios turnos disponibles</h4>
            {
            !horarios ? 'Cargando...' :
              <>
              <h4>{horarios.date}</h4>
              <ul className='listHora'>
               { horarios.availableTimeslots?.map((hora, index) => 
                <button className='horaTurno' key={index} onClick={()=>seleccionarHorario(hora)} >
                    <span>{hora}</span>
                </button>
               )}
              </ul>
              </>
            }
        </>
    );
}

export default Horarios