import React, { useState } from 'react'
import Mensaje from './Mensaje';

function NuevoPresupuesto({ presupuesto, setPresupuesto, setIsvalidPresupuesto }) {
  const [mensaje, setMesaje] = useState('');
  const handlePresupuesto = (e) => {
    e.preventDefault();
    //guardo el presupuesto para validarlo
    let presupuestoValidado = presupuesto;
    if(typeof presupuestoValidado === 'string' && presupuestoValidado.includes(',')) {
      presupuestoValidado = presupuestoValidado.replace(',', '.')
    }
    if(!Number(presupuesto) || Number(presupuesto) < 0) {
      setMesaje('no es un presupuesto valido');
      return;
    }
    setMesaje('');
    setPresupuesto(Number(presupuestoValidado))
    setIsvalidPresupuesto(true)
  }

  return (
    <div className='contenedor-presupuesto contenedor sombra'>
      <form onSubmit={handlePresupuesto} className='formulario'>
        <div className="campo">
          <label htmlFor="">Definir Presupuesto</label>
          <input 
            type="number" 
            className='nuevo-presupuesto'
            placeholder='Añade tu presupuesto'
            step="0.01"
            value={presupuesto}
            onChange={(e) => setPresupuesto(e.target.value) }
          />
        </div>
        <input type="submit" value="Añadir" />
        {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
      </form>
    </div>
  )
}

export default NuevoPresupuesto;