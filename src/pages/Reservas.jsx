import React, { useState } from 'react'
import Categorias from '../components/Categorias'
import ProgressBar from '../components/ProgressBar'
import BotoneraAvanzar from '../components/BotoneraAvanzar'
import Horarios from '../components/Horarios'
import ConfirmarTurno from '../components/ConfirmarTurno'

function Reservas() {

  const [progreso, setProgreso] = useState(10)
    
  const aumentarProgreso = (porcentaje) => {
    setProgreso(prevProgreso => prevProgreso + porcentaje);
  }

  return (
    <>
    {
      progreso <= 30 ?
      <h4 style={{width:"90%"}}>Seleccionar servicio</h4>
      :
        progreso <= 75 ? 
        <h4 style={{width:"90%"}}>Seleccionar horario</h4>
        :
        <h4 style={{width:"90%"}}>Confirmar turno</h4>
    }
        <div className='progressBar'>
              <ProgressBar progreso={progreso} />
        </div>
        {
          progreso <= 30 ?
          <div className='contReservas'>
              <div className='categorias'>
                    <Categorias servicioSeleccionado={progreso === 0 || progreso < 25 ? () => aumentarProgreso(20) : null} />
              </div>
          </div>
          :
          progreso <= 75 ? 
          <div className='contHorarios'>
          <div className='horarios'>
                <Horarios horarioSeleccionado={progreso >= 25 && progreso <70 ? () => aumentarProgreso(25) : null } />
          </div>
          </div>
          :
          <div className='contReservas'>
              <div className='categorias'>
                    <ConfirmarTurno/>
              </div>
          </div>
        } 
    {
      (
        progreso > 15 ?
        <div className='buttonAvanzar'>
          <BotoneraAvanzar 
            progreso={progreso} 
            siguienteEtapa={progreso === 30 || progreso === 70 ? () => aumentarProgreso(15) : null}
            etapaAnterior={() => {
              if (progreso > 70) {
                setProgreso(70);
              } else if (progreso <= 70 && progreso > 30) {
                setProgreso(30);
              } else {
                setProgreso(30);
              }
            }}
            confirmar={()=>setProgreso(100)}
          />
        </div>
        :
        null
      )
    }
    </>
  )
}

export default Reservas