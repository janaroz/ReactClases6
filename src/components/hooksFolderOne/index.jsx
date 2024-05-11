import React from "react";
import { useState } from "react";
function MiHooksOne () {
  const [contador, setContador] = useState(0);
  return (
    <div>
      <p>Haz hecho clic {contador} veces</p>
        <button onClick={() => setContador(contador + 1)}>Hazme clic</button>
        <button onClick={() => setContador(contador + 1)}>Hazme clic</button>
    </div>
  );
};

export default MiHooksOne
