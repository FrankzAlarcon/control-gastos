import React from 'react'

function Mensaje({children, tipo}) {
  return (
    <div className={`alerta ${tipo}`}>{children}</div>
  )
}

export default Mensaje