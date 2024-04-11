import React from 'react'

function Index() {
  return (
    <>
      <h1 style={{textAlign: "center", marginTop:"50px"}}>Bienvenid@!</h1>
      <div className='contIndex'>
          <div style={{display:"flex", flexDirection:"column", justifyContent:"space-around", alignItems:"center", height:"334px"}}>
            <h2 style={{textAlign: "center", fontSize:"15px", width: "50%"}}>Podras elegir un turno disponible haciendo click en reservar</h2>
            <i class="fa-solid fa-arrow-down fa-bounce"></i>
          </div>
          <div style={{display:"flex", flexDirection:"column", justifyContent:"space-around", alignItems:"center", height:"334px"}}>
            <h2 style={{textAlign: "center", fontSize:"15px", width: "50%"}}>Podras visualizar tus turnos haciendo click en mis turnos</h2> 
            <i class="fa-solid fa-arrow-down fa-bounce"></i>
          </div>
      </div>
    </>
  )
}

export default Index