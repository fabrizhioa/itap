import React from "react";
import { Producto } from "../../../components/products/Producto";
import { ListaProductos } from "../../../data";

export const Productos = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 max-w-screen-lg m-auto">
      {ListaProductos.map((product, index) => (
        <Producto
          key={index}
          imagen={product.images[0]}
          titulo={product.title}
          price={product.price}
          discount={product.discount}
        />
      ))}
    </div>
  );
};
