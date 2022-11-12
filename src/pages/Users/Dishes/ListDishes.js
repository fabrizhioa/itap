import React from "react";
import { FaPlus, FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import NoDishes from "./NoDishes";

const ListDishes = () => {
  //Logica de platillos
  const Platillos = false;

  return Platillos ? (
    <div className="flex flex-col p-2 gap-4">
      <h2 className="w-full text-xl font-medium">Lista de Platillos</h2>
      <div className="flex flex-wrap gap-2">
        <div className="max-w-[256px] relative group">
          <div className="opacity-0 group-hover:opacity-100 absolute w-full h-full bg-tc/20 text-white flex items-center justify-center">
            <a
              href="#"
              className="p-2 border-[1px] rounded-sm hover:bg-slate-50/20"
            >
              Visitar
            </a>
          </div>
          <button
            className="text-tg text-xl absolute top-1 right-1 z-20 hover:bg-gray-50/10 p-1 pb-1.5 pl-1.5 flex items-center justify-center rounded-sm"
            type="button"
          >
            <FaRegEdit />
          </button>
          <img
            src="https://www.estudiotentacion.com/wp-content/uploads/2019/11/PORTADAS-WEB-LORE-08.png"
            alt=""
            className="w-full aspect-square rounded-sm"
          />
        </div>
        <Link
          to="create"
          className="max-w-[256px] w-full flex items-center justify-center aspect-square bg-tc/20 rounded-sm"
        >
          <div className="flex items-center justify-center flex-col">
            <FaPlus className="text-2xl text-tg" />
            <p className="text-lg text-tc font-medium">Añadir Nuevo</p>
          </div>
        </Link>
      </div>
    </div>
  ) : (
    <NoDishes />
  );
};

export default ListDishes;
