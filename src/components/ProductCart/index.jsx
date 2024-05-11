import { useState } from "react";
import { Product } from "./product";
import NewProduct from "./newProductFolder";
import { CartShopping } from "./cart";
export const ProductCard = () => {
  /*let nombre = 'chocolate';
  let precio = 1500;*/
  // busca una variable si lo pongo sin comillas.
  // camel case para css y las propiedades con comillas

  const [productList, setProductList] = useState([
    {
      nombre: "Camisa",
      precio: 25.99,
      cantDeseada: 1,
      stock: 10,
    },
    {
      nombre: "Pantalón",
      precio: 39.99,
      cantDeseada: 1,
      stock: 2,
    },
    {
      nombre: "Zapatos",
      precio: 49.99,
      cantDeseada: 1,
      stock: 6,
    },
    {
      nombre: "Bufanda",
      precio: 12.5,
      cantDeseada: 1,
      stock: 50,
    },
  ]);
  const [cardProductList, setCardProductList] = useState([]);
  const [nombreProducto, setNombreProducto] = useState("");
  const [precio, setPrecio] = useState(0);
  const [countProds, setCountProds] = useState(1);
  /*const onClickRegistrarNuevo = () => {
    setProductList({...productList, {nombre: {nombreProducto},precio: {precio}}});

  };*/

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto auto auto auto",
        }}
      >
        <div style={{gridColumn: "1", padding:"10px",border: "2px dotted #7703fc"}}>
          <h2>Productos existentes</h2>
          {productList.map((products, index) => (
            <Product
              key={index}
              indice={index}
              nombre={products.nombre}
              precio={products.precio}
              stockProduct={products.stock}
              productList={productList}
              setProductList={setProductList}
              cardProductList={cardProductList}
              setCardProductList={setCardProductList}
              countProds={countProds}
              setCountProds={setCountProds}
            />
          ))}
          
        </div>
        <div style={{ gridColumn: "2" ,padding:"10px",border: "2px dotted #7703fc"}}><NewProduct
            nombreProducto={nombreProducto}
            setNombreProducto={setNombreProducto}
            precio={precio}
            setPrecio={setPrecio}
            productList={productList}
            setProductList={setProductList}
          /></div>
        <div style={{ gridColumn: "3",padding:"10px", border: "2px dotted #7703fc"}}>
          <h2>Carrito de compras</h2>
          {cardProductList.map((products, index) => (
            <CartShopping
            key={index}
            indice={index}
              nombre={products.nombre}
              precio={products.precio}
              cantidad={products.cantidad}
              cardProductList={cardProductList}
              setCardProductList={setCardProductList}
              countProds={countProds}
              setCountProds={setCountProds}
              productList={productList}
              setProductList={setProductList}
            />
          ))}
        </div>
      </div>
    </>
  );
};
