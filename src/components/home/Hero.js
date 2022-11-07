import React from "react";
import imagenes from "../../assets/imagenes";

const Hero = () => {
  return (
    <section className="px-  bg-Neutral-200 md:px-0 bg-[#dfdfdf]">
      <div className="max-w-full  sm:py-10 py-6 sm:px-4 lg:px-6 font-momo font-semibold sm:text-center">
        <p className=" lg:text-5xl text-3xl p-2 text-center  text-gray-900 s">
          La evolución del Menú se encuentra aquí{" "}
        </p>
      </div>

      <div className="container items-center   max-w-full lg:px-60  mx-auto space-y-0 text-center"></div>
      <div className=" w-3/3 lg:w-1/3"></div>
      <div
        data-aos="zoom-in "
        data-aos-duration="2000"
        data-aos-easing="ease-in-out"
      >
        <div className=" relative  max-w-full  py-10 lg:py-0 mx-auto  ">
          <img alt="hero" className="" src={imagenes.img7} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
