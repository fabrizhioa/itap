import React from "react";
import { AiOutlineDropbox, AiOutlineWifi } from "react-icons/ai";
import { BsShieldCheck } from "react-icons/bs";
import { VscDeviceMobile } from "react-icons/vsc";

const rowClassName =
  "flex-auto w-full border border-white border-opacity-60 px-7 lg:px-12  py-5 lg:py-44 font-sans bg-black bg-opacity-50 to-transparent ";

const Content2 = () => {
  return (
    <section className="text-white bg-Hero-new  bg-cover  bg-fixed">
      <div className="w-full ms:flex-col md:flex-auto  lg:flex  ">
        <div className={rowClassName}>
          <svg
            className="w-16 h-16  mt-1 lg:mt-32  fill-current"
            viewBox="0 0 15 16"
          >
            <AiOutlineDropbox />
          </svg>
          <h1 className="text-2xl lg:text-lg font-semibold tracking-wider pt-1 lg:pt-0 ">Recibe Listo </h1>{" "}
          <h2 className="text-2xl lg:text-lg font-semibold tracking-wider pt-1 lg:pt-0 "> para Usar </h2>{" "}
          <p className="text-lg lg:text-sm mt-2 lg:mt-1 text-gray-300 ">
            Recibe todo listo para usar desde el primer día
          </p>
        </div>

        <div className={rowClassName}>
          <svg
            className="w-16 h-16  mt-1 lg:mt-0 fill-current "
            viewBox="0 0 15 16"
          >
            <AiOutlineWifi />
          </svg>
          <h1 className="text-2xl lg:text-lg font-semibold tracking-wider  lg:pt-0 ">Tecnología</h1>{" "}
          <h2 className="text-2xl lg:text-lg font-semibold tracking-wider pt-1 lg:pt-0  "> NFC </h2>{" "}
          <p className="text-lg lg:text-sm mt-2 lg:mt-1 text-gray-300 whitespace-pre-line tracking-wider  ">
            Nuestra tecnología es la manera mas avanzada de compartir
            información
          </p>
        </div>

        <div className={rowClassName}>
          <svg
            className="w-16 h-16  mt-1 lg:mt-32 fill-current"
            viewBox="0 0 15 16"
          >
            <BsShieldCheck />
          </svg>
          <h1 className="text-2xl lg:text-lg font-semibold tracking-wider pt-1 lg:pt-0">Rapido</h1>{" "}
          <h2 className="text-2xl lg:text-lg font-semibold tracking-wider pt-1 lg:pt-0   ">
            {" "}
            Facil y seguro{" "}
          </h2>
          <p className="text-lg lg:text-sm mt-3  lg:mt-1 text-gray-300">
            Comparte en un Segundo la información que quieras, La Seguridad de
            tus datos s es lo mas importante para nosotros
          </p>
        </div>

        <div className={rowClassName}>
          <svg className="w-16 h-16 mt-1  fill-current" viewBox="0 0 15 16">
            <VscDeviceMobile />
          </svg>
          <h1 className="text-2xl lg:text-lg font-semibold tracking-wider pt-2 lg:pt-0  ">
            Compatibilidad{" "}
          </h1>{" "}
          <p className="text-lg lg:text-sm   mt-2 lg:mt-1 text-gray-300">
            Con Nuestras dos presentaciones todos tus clientes serán compatibles
          </p>
        </div>
      </div>
    </section>
  );
};

export default Content2;
