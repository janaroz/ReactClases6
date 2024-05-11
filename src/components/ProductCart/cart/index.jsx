import { useState } from "react";
export const CartShopping = (props) => {
  const eliminarProducto = () => {
    props.setCardProductList((prevProductList) => {
        return prevProductList.filter((_, index) => index !== props.indice);
      });
      onClickRegistrarNuevo();
  };
  const nuevoProducto = {
    nombre: props.nombre,
    precio: props.precio,
    cantidad: props.cantidad,
  };
  const onClickRegistrarNuevo = () => {
    console.log("HOOOLA", nuevoProducto);
    props.setProductList([...props.productList, nuevoProducto]);
   
  };
  console.log("cart:",props)
  return (
    <div>
      <p>{props.nombre}</p>
      <p>{props.precio}</p>
      <p>{props.cantidad}</p>
      <button onClick={eliminarProducto}> Eliminar</button>
    </div>
  );
};
