import React from "react";
import imagenes from "../../assets/imagenes";

const Content4 = () => {
  return (
    <section className="px- pt-1  md:px-0 bg-fixed bg-[#dbdbdb] ">
      <div className="max-w-full  sm:py-14 py-6 sm:px-4 lg:px-6 font-momo font-semibold sm:text-center">
        <p className=" lg:text-5xl sm:text-2xl text-2xl  text-center  text-gray-900 s">
          Como comprar{" "}
        </p>
      </div>
      <div className="container items-center max-w-full px-5 mx-auto   text-center"></div>
      <div className=" max-w-full  lg:px-80 px-0 mt- text-center">
        <img alt="hero" src={imagenes.img5} />
      </div>
    </section>
  );
};

export default Content4;
