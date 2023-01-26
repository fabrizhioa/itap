import React, { useState } from "react";
import { FaArrowLeft, FaMinus, FaPlus, FaShoppingBag } from "react-icons/fa";
import { MdArrowBack } from "react-icons/md";

const FakeData = {
  theme: {
    color1: "#E86851",
    color2: "#ffffff",
  },
  elements: [
    {
      image:
        "https://png.monster/wp-content/uploads/2022/06/png.monster-747-370x370.png",
      nombre: "Waffles with strawberry",
      tags: ["Chocolate", "Strawberry", "waffles", "blueberry"],
      calorias: 320,
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, quas nam. Odit corporis unde aperiam delectus velit quam, quidem nemo incidunt vitae possimus magni. Reprehenderit voluptatibus dignissimos repudiandae nulla rem?",
      category: "waffles",
      types: [
        {
          tamaño: "small",
          precio: 13.69,
        },
        {
          tamaño: "medium",
          precio: 18.69,
        },
      ],
    },
    {
      image:
        "https://png.monster/wp-content/uploads/2022/06/png.monster-747-370x370.png",
      nombre: "Waffles with strawberry",
      tags: ["Chocolate", "Strawberry", "waffles", "blueberry"],
      calorias: 320,
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, quas nam. Odit corporis unde aperiam delectus velit quam, quidem nemo incidunt vitae possimus magni. Reprehenderit voluptatibus dignissimos repudiandae nulla rem?",
      category: "waffles",
      types: [
        {
          tamaño: "small",
          precio: 13.69,
        },
        {
          tamaño: "medium",
          precio: 18.69,
        },
      ],
    },
  ],
};

const Cafecho = () => {
  const [viewElement, setViewElement] = useState(undefined);
  const [selectedTypeElement, setSelectedTypeElement] = useState(0);
  const [countElement, setCountElement] = useState(1);

  return (
    <>
      <div
        className={` bg-gradient-to-b  from-[#3E403F] via-[#3E403F] to-black min-h-screen w-full font-serif absolute transition-all duration-500 ${
          viewElement !== undefined ? "top-0 left-0" : "top-0 -left-full"
        } z-20`}
      >
        <header>
          <button
            type="button"
            onClick={() => {
              setViewElement(undefined);
              setSelectedTypeElement(0);
              setCountElement(1);
            }}
            className="text-white p-2 text-xl"
          >
            <FaArrowLeft />
          </button>
        </header>

        {viewElement !== undefined && (
          <div className="flex flex-col gap-2 p-3 container m-auto  relative ">
            <h3
              className="text-2xl  text-center"
              style={{ color: FakeData.theme.color1 }}
            >
              {FakeData.elements[viewElement].category}
            </h3>
            <img
              src={FakeData.elements[viewElement].image}
              alt={FakeData.elements[viewElement].nombre}
              className="aspect-square w-4/5  mx-auto rounded-full
              "
              style={{ backgroundColor: FakeData.theme.color1 }}
            />
            <h2 className="text-2xl text-white">
              {FakeData.elements[viewElement].nombre}
            </h2>
            <p className="flex flex-wrap items-center gap-2">
              {FakeData.elements[viewElement].tags.map((e, i) => (
                <span
                  className="border-r-2 pr-2 text-gray-500/80 border-gray-500  font-medium  last:border-none"
                  key={i}
                >
                  {e}
                </span>
              ))}
            </p>
            <p className="text-gray-500/80 flex gap-2 items-center">
              Calories{" "}
              <span className="text-white font-medium">
                {FakeData.elements[viewElement].calorias}Kcal
              </span>
            </p>

            <div className="flex justify-between">
              <div className="flex gap-2 items-center justify-start">
                <button
                  type="button"
                  onClick={() =>
                    countElement > 1 && setCountElement(countElement - 1)
                  }
                  className="bg-gray-300 rounded-lg p-2"
                >
                  <FaMinus />
                </button>
                <input
                  type="number"
                  value={countElement}
                  onChange={(e) => setCountElement(Number(e.target.value))}
                  className="w-8 bg-transparent text-white text-center"
                  min={1}
                />
                <button
                  type="button"
                  onClick={() => setCountElement(countElement + 1)}
                  className="bg-gray-300 rounded-lg p-2"
                >
                  <FaPlus />
                </button>
              </div>
              <select
                name="type"
                value={selectedTypeElement}
                onChange={(e) => setSelectedTypeElement(e.target.value)}
                className="bg-gray-300 p-2 rounded-lg font-medium"
              >
                {FakeData.elements[viewElement].types.map((e, i) => (
                  <option value={i} key={i}>
                    {e.tamaño}
                  </option>
                ))}
              </select>
            </div>

            <p className="text-gray-400/80">
              {FakeData.elements[viewElement].descripcion}
            </p>
            <div
              className={
                "flex justify-between sticky p-2 bottom-0 items-center w-full transition-all duration-500 justify-self-end self-end"
              }
            >
              <p className="text-xl text-white">
                $
                {FakeData.elements[viewElement]?.types[selectedTypeElement]
                  .precio * countElement}
              </p>
              <button
                type="button"
                className="rounded-lg p-2 flex items-center gap-2"
                style={{
                  backgroundColor: FakeData.theme.color1,
                  color: FakeData.theme.color2,
                }}
              >
                <FaShoppingBag /> Add to cart
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="bg-gradient-to-b  from-[#3E403F] via-[#3E403F] to-black min-h-screen font-serif">
        <header className="bg-black/10 p-2 text-gray-100 text-2xl font-serif text-center">
          <h2>Cafecho</h2>
        </header>
        <div className="grid grid-cols-2 gap-3 p-4">
          {FakeData.elements?.map((e, i) => (
            <button
              key={i}
              className="bg-gradient-to-b from-[#3E403F] via-[#3E403F] to-black w-max mx-auto rounded-[5rem_5rem_1rem_1rem] overflow-hidden flex flex-col gap-2 items-center"
              type="button"
              onClick={() => setViewElement(i)}
            >
              <img
                src={e.image}
                alt={e.nombre}
                className=" w-32 h-32 aspect-square rounded-full"
                style={{ backgroundColor: FakeData.theme.color1 }}
              />
              <div className="flex p-2  flex-col gap-2 items-center justify-center">
                <h3 className="capitalize text-white font-serif w-min text-center mx-auto">
                  {e.nombre}
                </h3>
                <p
                  className=" text-lg"
                  style={{ color: FakeData.theme.color1 }}
                >
                  ${e.types[0].precio}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cafecho;
