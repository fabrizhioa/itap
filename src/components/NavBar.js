import React from "react";
import { useState } from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { Link } from "react-router-dom";
import imagenes from "../assets/imagenes";

const NavBarButton = ({ href = false, text }) => {
  const className =
    "block py-2 pr-4 pl-3  ease-in duration-300   text-lg md:text-base font-extralight text-gray-100 md:text-gray-900 rounded   hover:bg-gray-400 md:hover:bg-transparent md:border-0 md:hover:text-gray-50  md:p-0 ";

  return href !== false ? (
    <Link to={href} className={className}>
      {text}
    </Link>
  ) : (
    <button className={className}>{text}</button>
  );
};

const NavBarContent = () => {
  return (
    <>
      <ul className="flex flex-col p-2   mt-4 md:bg-[#dfdfdf]  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
        <li>
          <NavBarButton href="/" text="Inicio" />
        </li>

        <li>
          <NavBarButton href="/benefits" text="Beneficios" />
        </li>
        <li>
          <NavBarButton href="/shop" text="Productos" />
        </li>
        <li>
          <NavBarButton href="/services" text="Servicios" />
        </li>
        <li>
          <NavBarButton href="/about" text="Nosotros" />
        </li>

        <li>
          <NavBarButton href="/contact" text="Contacto" />
        </li>
      </ul>
    </>
  );
};

const NavBar = ({ cartHandleButton }) => {
  const [open, toggleOpen] = useState(false);

  return (
    <header className="text-gray-600 body-font sticky  border-transparent md:border-transparent md:border-neutral-600 h-30  lg:h-36 md:flex  flex-col top-0 z-50 bg-[#dfdfdf] drop-shadow-md">
      <div className="container mx-auto flex p-1 flex-wrap justify-around  pt-4 flex-col md:flex-row items-center">
        <span className="w-20 lg:w-52 h-full" />
        <img
          alt="hero"
          className="w-32  pt-2 lg:w-52 h-full "
          src={imagenes.img4}
        />

        <span className="relative  ml-8 md:block hidden ">
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-gray-800 transform translate-x-1/2 -translate-y-1/2 bg-gray-300 rounded-full">
            0
          </span>
          <button
            type="button"
            onClick={cartHandleButton}
            className="inline-grid grid-cols-[max-content,auto] shadow-md auto-rows-auto overflow-hidden hover:bg-gray-100 text-black bg-[#e9d7a9] rounded group"
          >
            <span className="p-2  text-gray-800 bg-gray-400 h-full aspect-square flex items-center justify-center group-hover:bg-tg">
              <svg
                className="w-5 h-5 block group-hover:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                ></path>
              </svg>
            </span>
            <span className="pl-4 pr-5 py-2.5">Ordenes</span>
          </button>
        </span>
      </div>

      <nav className="  px-2 sm:px-4 py-2 rounded">
        <div className="container flex flex-wrap justify-between  md:justify-center items-center mx-auto">
          <button
            onClick={() => toggleOpen(!open)}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 bg-gray-800 ml-3 text-sm text-gray-50  md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-8 h-8 "
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>

          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 mx-2  bg-gray-800 ml-3 text-sm text-gray-50  md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-8 h-8 px "
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 15 15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <AiOutlineShopping />
            </svg>
          </button>

          {open && (
            <div className="w-full md:hidden" id="navbar-default">
              <NavBarContent />
            </div>
          )}

          <div className="hidden md:block  md:w-auto" id="navbar-default">
            <NavBarContent />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
