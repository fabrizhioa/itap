import React from "react";

const Content = () => {
  return (
    <section className="text-white bg-hero-max  bg-cover bg-center lg:bg-scroll  ">
      <div className="max-w-full mx-auto py-1 lg:py-10 lg:px-32  ">
        <p className="mt-2 text-sx lg:font-semibold font-bold lg:text-start text-end   px-6 lg:px-20   text-gray-900  lg:text-gray-50   sm:tracking-tight lg:text-6xl">
          Una Nueva
        </p>
        <p className="mt-2 text-sx lg:font-semibold font-bold lg:text-start text-end  px-6  lg:px-20   text-gray-900 lg:text-gray-50  sm:tracking-tight lg:text-6xl">
          Manera De
        </p>
        <p className="mt-2 text-sx lg:font-semibold font-bold lg:text-start text-end px-6   lg:px-20  text-gray-900  lg:text-gray-50   sm:tracking-tight lg:text-6xl">
          Compartir.
        </p>
        <div className="px-2 mt-2 lg:px-36 lg:justify-start justify-end lg:mt-6 flex">
          <button
            href="#_"
            className="relative px-0 lg:px-4 lg:py-4 py-1 font-medium text-gray-100 group"
          >
            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-gray-400 group-hover:bg-gray-800 group-hover:skew-x-12"></span>
            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-gray-700 group-hover:bg-gray-500 group-hover:-skew-x-12"></span>
            <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-gray-400 -rotate-12"></span>
            <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-gray-400 -rotate-12"></span>
            <span className="relative italic">Comprar Ahora</span>
          </button>
        </div>
      </div>
      <div></div>
      <div className="h-96 flex"> </div>
    </section>
  );
};

export default Content;
