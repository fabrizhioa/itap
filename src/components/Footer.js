import React from "react";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font   bg-[#ececec]">
      <div className="border-t border-gray-200 bg-tc">
        <div className="container  py-28 flex flex-wrap justify-center lg:space-x-3 space-x-2 lg:space-y-0 space-y-3  mx-auto items-center">
          <label htmlFor="email" className="leading-7 text-2xl text-white">
            Subscribete!
          </label>

          <input
            type="email"
            id="email"
            name="email"
            className="w-72 bg-[#dfdfdf] bg-opacity-50  border-yellow-300 focus:border-red-500 focus:bg-transparent focus:ring-2 focus:ring-[#e9d7a9]  text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />

          <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-center">
            <button className="text-gray-700  bg-[#e9d7a9] py-3 px-4 focus:outline-none hover:bg-gray-50  text-sm">
              Subscribete
            </button>
          </div>
        </div>
      </div>
      <div className="pt-6 cursor-pointer text-gray-800 flex justify-center  items-center w-full">
        <div className="grid lg:grid-cols-2 grid-cols-2 text-center gap-1">
          <div className="mb-6 md:mb-0 ">
            <h5 className="font-medium mb-2  text-center uppercase">
              Categorias
            </h5>

            <nav className="list-none mb-10 ">
              <li>
                <button className="text-gray-600 hover:text-gray-800">
                  INICIO
                </button>
              </li>
              <li>
                <button className="text-gray-600 hover:text-gray-800">
                  BENEFICIOS
                </button>
              </li>
              <li>
                <button className="text-gray-600 hover:text-gray-800">
                  SERVICIOS
                </button>
              </li>
              <li>
                <button className="text-gray-600 hover:text-gray-800">
                  PRODUCTOS
                </button>
              </li>
            </nav>
          </div>
          <div className="mb-6 md:mb-0 lg:px-32 px-0 ">
            <h5 className="font-medium mb-2 text-center cursor-pointer uppercase">
              Categorias
            </h5>
            
            <nav className="list-none mb-10">
              <li>
                <button className="text-gray-600 hover:text-gray-800">
              ENVIOS Y DEVOLUCIONES
                </button>
              </li>
              <li>
                <button className="text-gray-600 hover:text-gray-800">
                METODOS DE PAGO
                </button>
              </li>
              <li>
                <button className="text-gray-600 hover:text-gray-800">
                FAQ
                </button>
              </li>
              <li>
                <button className="text-gray-600 hover:text-gray-800">
                STORE POLICY
                </button>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-[#e3e3e3]">
        <div className="container mx-auto py-6 px-2 justify-center flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-600 text-md text-center sm:text-left">
            ©2020 derechos reservados iTAP MEXICO
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
