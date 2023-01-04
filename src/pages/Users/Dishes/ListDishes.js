import React, { useState } from "react";
import { useRef } from "react";
import { FaPlus, FaRegEdit } from "react-icons/fa";

import { Link } from "react-router-dom";
import { Card } from "../../../components/users/Card";
import NoDishes from "./NoDishes";

const ListDishes = () => {
  //Logica de platillos
  const Platillos = true;
  const [viewCard, setviewCard] = useState(false);

  const [orden, setOrden] = useState(0);
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const [filterMenu, setFilterMenu] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [filterTypes, setFilterTypes] = useState([]);
  const searchInput = useRef();

  //El filtrado esta echo al tener la data se pasa por este punto
  //necesita tener el platillo:
  //un espaciado de restaurants en los que se sirve llamado "restaurants"
  //un espaciado de menus en los que se muestra llamado "menus"
  //un espaciado de tipos a los que pertenece llamado "tipos"

  //eslint-disable-next-line
  const FilteredList = (list) => {
    let newlist = list;

    switch (orden) {
      case 1:
        newlist = newlist.sort((a, b) => {
          return a.precio > b.precio ? 1 : -1;
        });

        break;

      case 2:
        newlist = newlist.sort((a, b) =>
          new Date(a.fecha).getTime() < new Date(b.fecha).getTime() ? 1 : -1
        );

        break;
      case 3:
        newlist = newlist.sort((a, b) =>
          new Date(a.fecha).getTime() > new Date(b.fecha).getTime() ? 1 : -1
        );

        break;

      default:
        newlist = newlist.sort((a, b) => (a.precio < b.precio ? 1 : -1));
        break;
    }

    if (filterText.length > 0) {
      newlist = newlist.filter((platillo) =>
        platillo.name.includes(filterText)
      );
    }

    if (filterRestaurant.length > 0) {
      filterRestaurant.forEach((filter) => {
        newlist = newlist.filter((platillo) =>
          platillo.restaurants.includes(filter)
        );
      });
    }

    if (filterMenu.length > 0) {
      filterMenu.forEach((filter) => {
        newlist = newlist.filter((platillo) => platillo.menus.includes(filter));
      });
    }

    if (filterTypes.length > 0) {
      filterTypes.forEach((filter) => {
        newlist = newlist.filter((platillo) => platillo.menus.includes(filter));
      });
    }

    return newlist;
  };
  const FilterMenu = (value) => {
    if (filterMenu.includes(value)) {
      setFilterMenu(filterMenu.filter((filter) => filter !== value));
    } else {
      setFilterMenu([...filterMenu, value]);
    }
  };

  const FilterRestourants = (value) => {
    if (filterRestaurant.includes(value)) {
      setFilterRestaurant(
        filterRestaurant.filter((filter) => filter !== value)
      );
    } else {
      setFilterRestaurant([...filterRestaurant, value]);
    }
  };

  const FilterType = (value) => {
    if (filterTypes.includes(value)) {
      setFilterTypes(filterTypes.filter((filter) => filter !== value));
    } else {
      setFilterTypes([...filterTypes, value]);
    }
  };

  return Platillos ? (
    <>
      <div className="flex flex-col p-2 gap-4 relative">
        {viewCard && (
          <Card closeHandleButton={() => setviewCard(false)}>
            <div>
              <h4 className="font-medium pb-2">Orden</h4>
              <div className="grid grid-cols-2 gap-2">
                <button
                  className={`py-1 px-2 text-sm rounded-md border-2 ${
                    orden === 0 && "border-tg"
                  } `}
                  type="button"
                  onClick={() => setOrden(0)}
                >
                  Mayor a menor
                </button>
                <button
                  className={`py-1 px-2 text-sm rounded-md border-2 ${
                    orden === 1 && "border-tg"
                  } `}
                  type="button"
                  onClick={() => setOrden(1)}
                >
                  Menor a mayor
                </button>
                <button
                  className={`py-1 px-2 text-sm rounded-md border-2 ${
                    orden === 2 && "border-tg"
                  } `}
                  type="button"
                  onClick={() => setOrden(2)}
                >
                  Más reciente
                </button>
                <button
                  className={`py-1 px-2 text-sm rounded-md border-2 ${
                    orden === 3 && "border-tg"
                  } `}
                  type="button"
                  onClick={() => setOrden(3)}
                >
                  Más antiguo
                </button>
              </div>
            </div>
            {/*Filtros por restaurantes*/}
            <div>
              <h4 className="font-medium pb-2">Restaurantes</h4>
              <div className="grid grid-cols-2 gap-2">
                <button
                  className={`py-1 px-2 text-sm rounded-md border-2 ${
                    filterRestaurant.includes("ejemplo1") && "border-tg"
                  } `}
                  type="button"
                  onClick={() => FilterRestourants("ejemplo1")}
                >
                  Ejemplo 1
                </button>
                <button
                  className={`py-1 px-2 text-sm rounded-md border-2 ${
                    filterRestaurant.includes("ejemplo2") && "border-tg"
                  } `}
                  type="button"
                  onClick={() => FilterRestourants("ejemplo2")}
                >
                  Ejemplo 2
                </button>
              </div>
            </div>
            {/*Filtros por menu*/}
            <div>
              <h4 className="font-medium pb-2">Menus</h4>
              <div className="grid grid-cols-2 gap-2">
                <button
                  className={`py-1 px-2 text-sm rounded-md border-2 ${
                    filterMenu.includes("ejemplo1") && "border-tg"
                  } `}
                  type="button"
                  onClick={() => FilterMenu("ejemplo1")}
                >
                  Ejemplo 1
                </button>
                <button
                  className={`py-1 px-2 text-sm rounded-md border-2 ${
                    filterMenu.includes("ejemplo2") && "border-tg"
                  } `}
                  type="button"
                  onClick={() => FilterMenu("ejemplo2")}
                >
                  Ejemplo 2
                </button>
              </div>
            </div>
            {/*Filtros por tipos*/}
            <div>
              <h4 className="font-medium pb-2">Tipos</h4>
              <div className="grid grid-cols-2 gap-2">
                <button
                  className={`py-1 px-2 text-sm rounded-md border-2 ${
                    filterTypes.includes("ejemplo1") && "border-tg"
                  } `}
                  type="button"
                  onClick={() => FilterType("ejemplo1")}
                >
                  Ejemplo 1
                </button>
                <button
                  className={`py-1 px-2 text-sm rounded-md border-2 ${
                    filterTypes.includes("ejemplo2") && "border-tg"
                  } `}
                  type="button"
                  onClick={() => FilterType("ejemplo2")}
                >
                  Ejemplo 2
                </button>
              </div>
            </div>
          </Card>
        )}
        <div className="flex items-center justify-center">
          <div className="flex gap-2 items-center">
            <input
              type="text"
              placeholder="Buscar platillo"
              className="outline-none px-2 py-1 rounded-md border-2 "
              ref={searchInput}
              onChange={({ target: { value } }) => setFilterText(value)}
            />
          </div>
        </div>
        <h2
          className="w-full text-xl font-medium flex place-items-center gap-2
      
      "
        >
          Lista de Platillos{" "}
          <button
            className="rounded-md border-2 text-sm p-1 text-gray-300 hover:text-tc hover:border-tc"
            onClick={() => setviewCard(true)}
          >
            Filtros
          </button>
        </h2>
        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
          <div className="max-w-[256px] grid grid-rows-[auto_max-content] shadow-md overflow-hidden rounded-md hover:cursor-pointer">
            <div className="relative group">
              <div className="opacity-0 group-hover:opacity-100 absolute w-full h-full bg-tc/20 text-white flex items-center justify-center">
                <a
                  href="./#"
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
                className="block h-full"
              />
            </div>

            <div className=" p-1 h-[80px] flex items-center justify-center ">
              <h3 className="font-medium">Titulo del platillo</h3>
            </div>
          </div>
          <Link
            to="create"
            className="max-w-[256px] w-full grid grid-rows-[auto_max-content] aspect-square  rounded-md shadow-md overflow-hidden"
          >
            <div className="flex items-center justify-center flex-col bg-tc/20">
              <FaPlus className="text-4xl text-tg" />
            </div>
            <div className="h-[80px] flex items-center justify-center">
              <h3 className="font-medium">Añadir Nuevo</h3>
            </div>
          </Link>
        </div>
      </div>
    </>
  ) : (
    <NoDishes />
  );
};

export default ListDishes;
