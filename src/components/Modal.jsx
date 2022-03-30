import React from 'react'
import CerrarBtn from '../img/cerrar.svg';

function Modal({ setModal, animarModal, setAnimarModal }) {
  const ocultarModal =() => {
    setAnimarModal(false);
    setTimeout(() => {
      setModal(false);
    }, 400)
  }
  return (
    <div className='modal'>
      <div className="cerrar-modal">
        <img src={CerrarBtn} alt="icono cerrar modal" onClick={ocultarModal} />
      </div>
      <form className={`formulario ${animarModal ? 'animar':'cerrar'}`}>
        <legend>Nuevo Gasto</legend>
        <div className="campo">
          <label htmlFor="nombre">Nombre del Gasto</label>
          <input id='nombre' type="text" placeholder='Añade el nombre del gasto' />
        </div>
        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>
          <input id='cantidad'  type="number" placeholder='Añade la cantidad del gasto: ej. 300' />
        </div>
        <div className="campo">
          <label htmlFor="categoria">Categoría</label>
          <select name="categoria" id="categoria">
            <option value="">-- Seleccione</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="gastos">Gastos Varios</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
          </select>
        </div>
        <input type="submit" value="Añadir Gasto" />
      </form>
    </div>
  )
}

export default Modal;