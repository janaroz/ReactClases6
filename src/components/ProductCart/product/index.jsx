import { useState } from "react";

export const Product = (props) => {
  //console.log(props);
  // proque le agregamos estilo
  // el fragment es ams livinao y no peude recibir estilos

  const eliminarProducto = () => {
    props.setProductList((prevProductList) => {
      return prevProductList.filter((_, index) => index !== props.indice);
    });
    /*props.setProductList((p) => {
      p.filter(productList, props.indice);
      return [...props.productList]cc;
    });*/
    //return [...props.productList];
  };
  const nuevoProducto = {
    nombre: props.nombre,
    precio: props.precio,
    cantidad: props.countProds,
  };
  const agregarAlCarrito = () => {
    console.log(props.nombre, "queres comprar  : ", props.indice);
    console.log(nuevoProducto);
    eliminarProducto();
    props.setCardProductList([...(props.cardProductList),nuevoProducto]);
  };

  const styleProd = {
    border: "1px solid white",
    color: "red",
    fontFamily: "arial",
    
  };
  //const [countProds, setCountProds] = useState(1);
  const sumarCantidad = (e) => {
    props.setCountProds(e.target.value);
  };

  return (
    <div style={styleProd}>
      <p>{props.nombre}</p>
      <p>{props.precio}</p>
      <label>
        Cantidad:{" "}
        <input type="number" value={props.countProds} onChange={sumarCantidad}></input>
      </label>

      <button onClick={agregarAlCarrito}> Agregar al carrito</button>
      <button onClick={eliminarProducto}> Eliminar</button>
    </div>
  );
};
