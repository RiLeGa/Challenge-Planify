import React from 'react'

function ProgressBar({progreso}) {

  return (
        <>
          
           <div style={{ width: `${progreso}%`, padding:"0 5px", borderRadius: "10px", backgroundColor: '#349592', height: '14px', transition: 'width 0.5s' }}></div>
          
        </>
  )
}

export default ProgressBar