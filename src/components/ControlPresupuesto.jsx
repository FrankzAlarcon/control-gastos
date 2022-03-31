import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { formatearCantidad } from '../helpers';
import 'react-circular-progressbar/dist/styles.css';

function ControlPresupuesto({ presupuesto, gastos = []}) {
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);
  const [porcentaje, setPorcentaje] = useState(0);

  useEffect(() => {
    const totalGastado = gastos.reduce((total, gasto) => total + gasto.cantidad, 0);
    const presupuestoDisponible = presupuesto - totalGastado;

    //Calculos porcentajes gastados
    const nuevoPorcentaje = (((presupuesto - presupuestoDisponible)/ presupuesto ) * 100).toFixed(2);
    
    setGastado(totalGastado); 
    setDisponible(presupuestoDisponible);
    setTimeout(() => {
      setPorcentaje(nuevoPorcentaje);
    }, 500)
  }, [gastos])
  
  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
      <div>
        <CircularProgressbar 
          value={porcentaje}
          text={`${porcentaje}% Gastado`}
          styles={buildStyles({
            pathColor: '#3b82f6',
            trailColor: '#f1f1f1',
            textColor: '#3b82f6'
          })}
        />        
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