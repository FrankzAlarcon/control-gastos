import React from "react";
import NuevoPresupuesto from "./NuevoPresupuesto";
import ControlPresupuesto from "./ControlPresupuesto";

function Header({
  presupuesto,
  setPresupuesto,
  isValidPresupuesto,
  setIsvalidPresupuesto,
  gastos
}) {
  return (
    <header>
      <h1>Planificador de gastos</h1>
      {isValidPresupuesto ? 
      (
        <ControlPresupuesto gastos={gastos} presupuesto={presupuesto}/>
      ) : (
        <NuevoPresupuesto
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        setIsvalidPresupuesto={setIsvalidPresupuesto}
      />
      )}

    </header>
  );
}

export default Header;
