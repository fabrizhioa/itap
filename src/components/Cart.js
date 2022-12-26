import React from "react";
import { MdArrowForward, MdArrowRight, MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

export const Cart = () => {
  return (
    <div className="fixed right-0 top-0 z-[51] bg-[#dfdfdf] h-screen w-64 shadow-md grid grid-rows-[max-content,auto,max-content] flex-col gap-2">
      <div className="flex place-content-between p-2">
        <h2 className="font-semibold text-lg">Carrito de compras</h2>
        <button className="text-xl">
          <MdClose />
        </button>
      </div>
      <div className="flex gap-2 w-full px-2">
        <div className="grid grid-cols-[max-content_auto] gap-2 place-content-between  py-2  shadow-sm border-tc px-2 w-full h-max bg-white rounded-md">
          <div className="bg-tc rounded-md aspect-square w-16 inline-block"></div>
          <div className="grid grid-cols-2 auto-rows-auto gap-2 w-full">
            <div>
              <h3 className="font-medium text-sm">Elemento 1</h3>
              <p className="text-xs">Color</p>
            </div>
            <div className="flex justify-end">
              <p className="text-xl text-bold">$90</p>
            </div>
            <div className="text-xs font-medium">Cantidad: 1</div>
            <div className="flex justify-end">
              <button className="text-tg font-medium text-xs">Remover</button>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-self-end self-end flex flex-col gap-2 p-2 bg-white shadow-sm">
        <div className="flex gap-2 place-content-between p-1">
          <div className="">
            <h2 className="font-semibold text-lg">Subtotal</h2>
            <p className="text-xs">
              El envio e impuestos son anexados al confirmar la compra
            </p>
          </div>
          <p className="font-semibold text-lg">$90</p>
        </div>
        <div>
          <button className="p-2 w-full bg-tg text-white rounded-md">
            Pagar
          </button>
          <p className="text-xs text-center p-2">
            o{" "}
            <Link
              to="/shop"
              className="inline-flex items-center justify-center font-medium text-tg"
            >
              Continuar Compreando <MdArrowForward />
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
