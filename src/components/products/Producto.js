import React from "react";
import { Link } from "react-router-dom";

export const Producto = ({
  imagen,
  titulo,
  price,
  discount = { active: false },
}) => {
  return (
    <div className="flex flex-col justify-between text-center p-4">
      <Link
        to={"/product-page/" + titulo.replaceAll(" ", "-")}
        className="group"
      >
        <div className="relative overflow-hidden w-full max-w-[288px] aspect-square m-auto  items-center justify-center">
          <img
            src={imagen}
            alt={titulo}
            className="h-full m-auto group-hover:scale-110 transition-all"
          />
          <p className="absolute -bottom-10 p-2 group-hover:bottom-0 bg-white w-full transition-all">
            Vista previa
          </p>
        </div>
        <h2 className="capitalize text-2xl font-medium w-auto">{titulo}</h2>
        <hr className="w-8 border-t-4 m-auto" />
        <p className="text-tg text-4xl  p-4">
          {discount.active === false ? (
            "$" + price + ".00"
          ) : (
            <>
              <span className="line-through">${price}.00</span>
              {` $${discount.price}.00`}
            </>
          )}
        </p>
      </Link>
      <button className="bg-tc hover:bg-tch text-white rounded-full p-2 font-light">
        Agregar al carrito
      </button>
    </div>
  );
};
