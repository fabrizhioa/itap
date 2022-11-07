import React from "react";

const Content3 = () => {
  return (
    <div className="text-white bg-hero-pepper p-1  lg:p-44 bg-cover bg-center  ">
      <div className="h-64 lg:h-72 flex"></div>
      <div className="mt-20"></div>
      <a
        href="#_"
        className="relative inline-flex items-center justify-start px-14 py-3 overflow-hidden font-medium transition-all bg-[#e9d7a9] group"
      >
        <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-orange-400  group-hover:-mr-4 group-hover:-mt-4">
          <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-orange-500 "></span>
        </span>
        <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-orange-300   group-hover:mb-12 group-hover:translate-x-0"></span>
        <span className="relative w-full text-left text-red-700 transition-colors duration-200 ease-in-out group-hover:text-white">
          Ver Productos
        </span>
      </a>
    </div>
  );
};

export default Content3;
