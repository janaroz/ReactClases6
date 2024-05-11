import { useEffect, useState } from "react";

const MiHooksTwo = () => {
  const [value, setValue] = useState(true);
  const [saludo, setSaludo] = useState("Hola ");
  function change() {
    if (value) {
      setSaludo("Hola ");
      setValue(false);
    } else {
      setSaludo("Chao ");
      setValue(true);
    }
  }
  useEffect(()=>{
    change();
  },[])
  return (
    <div>
      <h1>Mi App</h1>
      <p>{saludo} Usuario</p>
      <button onClick={change}>{!value? "Logout" : "Login" }</button>
    </div>
  );
};
export default MiHooksTwo;
