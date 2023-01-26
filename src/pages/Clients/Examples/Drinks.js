import React from "react";
import { useState } from "react";
import {
  FaArrowLeft,
  FaHeart,
  FaHome,
  FaSearch,
  FaShoppingBasket,
  FaStream,
  FaUser,
} from "react-icons/fa";

const FakeData = {
  themes: {
    color1: "#0F8A92",
    color2: "#CBEDED",
    color3: "#ffffff",
    color4: "rgb(75,85,99)",
  },
  types: [
    {
      nombre: "cappuccinos",
      img: "https://static.vecteezy.com/system/resources/previews/011/771/155/original/cup-of-cappuccino-png.png",
    },
    {
      nombre: "expressos",
      img: "https://www.pngall.com/wp-content/uploads/4/Cafe-Espresso.png",
    },
    {
      nombre: "lattes",
      img: "https://png.monster/wp-content/uploads/2022/07/png.monster-31.png",
    },
    {
      nombre: "cappuccinos",
      img: "https://static.vecteezy.com/system/resources/previews/011/771/155/original/cup-of-cappuccino-png.png",
    },
    {
      nombre: "expressos",
      img: "https://www.pngall.com/wp-content/uploads/4/Cafe-Espresso.png",
    },
    {
      nombre: "lattes",
      img: "https://png.monster/wp-content/uploads/2022/07/png.monster-31.png",
    },
  ],
  elements: {
    cappuccinos: [
      {
        name: "Cappuccino",
        img: "https://static.vecteezy.com/system/resources/previews/011/771/155/original/cup-of-cappuccino-png.png",
        descripción:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum sequi praesentium incidunt ex, nulla tenetur atque fuga reiciendis et repellat. Praesentium quod aliquam dolor nobis, numquam ipsam necessitatibus animi obcaecati?",
        types: [
          {
            cont: "150ml",
            cost: 20.55,
          },
          {
            cont: "180ml",
            cost: 25.55,
          },
          {
            cont: "250ml",
            cost: 30.55,
          },
          {
            cont: "600ml",
            cost: 70.55,
          },
        ],
      },
      {
        name: "Cappuccino",
        img: "https://static.vecteezy.com/system/resources/previews/011/771/155/original/cup-of-cappuccino-png.png",
        descripción:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum sequi praesentium incidunt ex, nulla tenetur atque fuga reiciendis et repellat. Praesentium quod aliquam dolor nobis, numquam ipsam necessitatibus animi obcaecati?",
        types: [
          {
            cont: "150ml",
            cost: 20.55,
          },
          {
            cont: "180ml",
            cost: 25.55,
          },
          {
            cont: "250ml",
            cost: 30.55,
          },
          {
            cont: "600ml",
            cost: 70.55,
          },
        ],
      },
      {
        name: "Cappuccino",
        img: "https://static.vecteezy.com/system/resources/previews/011/771/155/original/cup-of-cappuccino-png.png",
        descripción:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum sequi praesentium incidunt ex, nulla tenetur atque fuga reiciendis et repellat. Praesentium quod aliquam dolor nobis, numquam ipsam necessitatibus animi obcaecati?",
        types: [
          {
            cont: "150ml",
            cost: 20.55,
          },
          {
            cont: "180ml",
            cost: 25.55,
          },
          {
            cont: "250ml",
            cost: 30.55,
          },
          {
            cont: "600ml",
            cost: 70.55,
          },
        ],
      },
    ],
  },
};

const Drinks = () => {
  const [selectItem, setSelectItem] = useState(undefined);
  return (
    <div className="grid grid-rows-[max-content,max-content,auto,max-content] grid-cols-1 p-4 gap-3  min-h-screen">
      <div
        className="flex justify-between "
        style={{ color: FakeData.themes.color1 }}
      >
        <FaStream />
        <FaShoppingBasket />
      </div>
      <div className="flex gap-2 flex-col w-full">
        <h2 className="text-2xl font-bold">Grab Your Coffee</h2>
        <div className="whitespace-nowrap  overflow-x-scroll w-full">
          {FakeData.types.map((e, i) => (
            <div key={i} className="inline-block">
              <img
                src={e.img}
                alt={e.nombre}
                className="w-20 h-20 inline-block mr-2 last:mr-0 rounded-lg"
                style={{ backgroundColor: FakeData.themes.color2 }}
              />
              <p className="text-sm text-center">{e.nombre}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex justify-between items-center ">
          <h3 className="text-xl font-medium">New Collections</h3>
          <button type="button" style={{ color: FakeData.themes.color1 }}>
            View more
          </button>
        </div>
        <div className="overflow-y-auto flex gap-3">
          {FakeData.elements.cappuccinos.map((x, i) => (
            <div
              className={`rounded-2xl transition-all w-full duration-500 overflow-hidden ${
                selectItem === i
                  ? "fixed h-screen  top-0 left-0 z-20  rounded-none grid grid-cols-1 grid-rows-[max-content,auto,max-content]"
                  : "p-2 flex-shrink-0 "
              }`}
              style={{ backgroundColor: FakeData.themes.color1 }}
              onClick={() => selectItem !== i && setSelectItem(i)}
            >
              {selectItem === i && (
                <FaArrowLeft
                  onClick={(e) => {
                    setSelectItem(undefined);
                    e.stopPropagation();
                  }}
                  className=" ml-2 mt-2 text-lg"
                  style={{ color: FakeData.themes.color3 }}
                />
              )}
              <img src={x.img} className="aspect-square m-auto" alt={x.name} />
              {selectItem === undefined && (
                <>
                  <h3
                    className=" text-xl "
                    style={{ color: FakeData.themes.color3 }}
                  >
                    {x.name}
                  </h3>
                  <p
                    className=" text-2xl "
                    style={{ color: FakeData.themes.color3 }}
                  >
                    ${x.types[0].cost}
                  </p>
                </>
              )}

              {selectItem === i && (
                <div
                  className="p-4 rounded-t-3xl h-max justify-end flex flex-col gap-2"
                  style={{ backgroundColor: FakeData.themes.color3 }}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-semibold">{x.name}</h3>
                    <div
                      className="rounded-full aspect-square p-2"
                      style={{
                        color: FakeData.themes.color3,
                        backgroundColor: FakeData.themes.color1,
                      }}
                    >
                      <FaHeart />
                    </div>
                  </div>
                  <p style={{ color: FakeData.themes.color4 }}>
                    {x.descripción}
                  </p>
                  <p className="text-xl font-semibold">Serving Size</p>
                  <div className="flex gap-3 flex-wrap">
                    {x.types.map((z, i) => (
                      <button
                        key={i}
                        className="p-1 px-2 rounded-full border-2"
                        style={{ borderColor: FakeData.themes.color1 }}
                      >
                        {z.cont}
                      </button>
                    ))}
                  </div>
                  <button
                    className=" p-2 px-4  rounded-full justify-self-end "
                    style={{
                      backgroundColor: FakeData.themes.color1,
                      color: FakeData.themes.color3,
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div
        className="flex justify-around rounded-lg p-2  text-xl"
        style={{
          backgroundColor: FakeData.themes.color1,
          color: FakeData.themes.color3,
        }}
      >
        <FaHome />
        <FaSearch />
        <FaHeart />
        <FaUser />
      </div>
    </div>
  );
};

export default Drinks;
