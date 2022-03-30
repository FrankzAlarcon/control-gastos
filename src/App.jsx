import { useState } from 'react'
import Header from './components/Header'; 
import IconoNuevoGasto from './img/nuevo-gasto.svg';
function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsvalidPresupuesto] = useState(false);
  return (
    <div className="App">
      <Header        
        presupuesto={presupuesto}        
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsvalidPresupuesto={setIsvalidPresupuesto}
      />
      {isValidPresupuesto && (
        <div className='nuevo-gasto'>
          <img src={IconoNuevoGasto} alt="icono nuevo gasto" />
        </div>
      )}
    </div>
  )
}

export default App
