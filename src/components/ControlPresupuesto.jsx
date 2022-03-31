import React, { useState, useEffect } from 'react'
import { formatearCantidad } from '../helpers';

function ControlPresupuesto({ presupuesto, gastos = []}) {
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);
  useEffect(() => {
    const totalGastado = gastos.reduce((total, gasto) => total + gasto.cantidad, 0);
    const presupuestoDisponible = presupuesto - totalGastado;
    setGastado(totalGastado); 
    setDisponible(presupuestoDisponible)
  }, [gastos])
  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
      <div>
        <p>Grafica aqui</p>        
      </div>
      <div className='contenido-presupuesto'>
        <p><span>Presupuesto: </span> {formatearCantidad(presupuesto)}</p>
        <p><span>Disponible: </span> {formatearCantidad(disponible)}</p>
        <p><span>Gastado: </span> {formatearCantidad(gastado)}</p>
      </div>
    </div>
  )
}

export default ControlPresupuesto;