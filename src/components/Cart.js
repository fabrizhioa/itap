import React from "react";
import { MdArrowForward, MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

export const Cart = ({ closeButtonAction, isActive }) => {
  return (
    <div
      className={`fixed ${
        isActive ? "right-0 bottom-0" : "-right-full -bottom-full"
      } transition-all duration-500 bottom-0 z-[51] bg-[#f5f5f5] max-h-screen h-max w-72 shadow-md drop-shadow-md grid grid-rows-[max-content,auto,max-content] flex-col rounded-tl-md overflow-hidden `}
    >
      <div className="flex justify-between p-2 items-center ">
        <h2 className="font-semibold text-tg text-lg drop-shadow-sm">
          Carrito de compras
        </h2>
        <button className="text-xl" onClick={closeButtonAction} type="button">
          <MdClose />
        </button>
      </div>
      <div className="flex gap-2 w-full pb-2">
        <div className="grid grid-cols-[max-content,auto] gap-2 border-b-2 border-tc p-2 w-full h-max">
          <div className="bg-tc rounded-md aspect-square h-16 w-16 inline-block"></div>
          <div className="grid grid-cols-[minmax(0,1fr),max-content] auto-rows-auto place-content-center gap-3">
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
      <div className="justify-self-end self-end flex flex-col gap-2 p-2 bg-tc text-white shadow-sm">
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
