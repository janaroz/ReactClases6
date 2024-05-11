import React, { useEffect } from "react";
import { useState } from "react";
export default function NewProduct({
  nombreProducto,
  setNombreProducto,
  precio,
  setPrecio,
  productList,
  setProductList,
}) {
  // PASABA LAS PROPS SIN {} SI NO COMO PARAMETROS SEPARADOS. proque??
  /*const [nombreProducto, setNombreProducto] = useState("");
  const [precio, setPrecio] = useState(0);*/
  const onChangeNombreProducto = (e) => {
    setNombreProducto(e.target.value);
  };
  const onChangePrecio = (e) => {
    setPrecio(e.target.value);
  };
  /*const onClickRegistrar = () => {
    
  };*/
  // se puede no crear este nuuvoProducto???
  const nuevoProducto = {
    nombre: nombreProducto,
    precio: precio,
  };
  const onClickRegistrarNuevo = () => {
    console.log("HOOOLA", nuevoProducto);
    setProductList([...productList, nuevoProducto]);
    setNombreProducto("");
    setPrecio("");
  };
  //value={nombreProducto}
  useEffect(() => {
    console.log("modifico nombre o precio");
  }, [nombreProducto, precio]);
  return (
    <>
      <br></br>
      <h2>Crear nuevo Producto</h2>
      <label>
        Nombre Producto
        <input
          type="text"
          value={nombreProducto}
          onChange={onChangeNombreProducto}
        />
      </label>
      <br></br>
      <label>
        Precio
        <input type="text" value={precio} onChange={onChangePrecio} />
      </label>
      <br></br>
      <button onClick={onClickRegistrarNuevo}>Registrar</button>
    </>
  );
}
