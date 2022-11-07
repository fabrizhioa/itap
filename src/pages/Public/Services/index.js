import React from "react";
import { ListaServicios } from "../../../data";

const Service = ({ image, title, link }) => {
  return (
    <div className="">
      <a href={link}>
        <img src={image} alt={title} className="aspect-video w-full" />
      </a>
      <h4 className="p-6 text-center bg-[#575757] text-white font-medium text-lg">
        {title}
      </h4>
    </div>
  );
};

const QuotationForm = () => {
  return (
    <form
      className="flex flex-col w-full max-w-screen-lg mx-auto gap-6 p-4"
      id="cotizacion"
    >
      <div className="flex flex-wrap gap-4 items-center justify-center">
        <div>
          <label className="block text-tc">Nombre *</label>
          <input
            type="text"
            className="p-1 bg-transparent border-[1px] border-tc"
          />
        </div>
        <div>
          <label className="block text-tc">Apellido</label>
          <input
            type="text"
            className="p-1 bg-transparent border-[1px] border-tc"
          />
        </div>
        <div>
          <label className="block text-tc">Email *</label>
          <input
            type="email"
            className="p-1 bg-transparent border-[1px] border-tc"
          />
        </div>
        <div>
          <label className="block text-tc">Telefono *</label>
          <input
            type="tel"
            className="p-1 bg-transparent border-[1px] border-tc"
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-4 items-center justify-center">
        <div
          style={{ width: "180px", height: "40px", backgroundColor: "#ffffff" }}
        ></div>
        <button className="bg-[#e9d7a9] py-2 px-6  hover:drop-shadow active:drop-shadow-none">
          Enviar
        </button>
      </div>
    </form>
  );
};

const Services = () => {
  return (
    <div className="bg-bc min-h-screen w-full grid auto-rows-auto gap-6 pt-6">
      <h2 className="text-5xl font-light text-center">Servicios</h2>
      <div className="grid auto-rows-max   md:grid-cols-2 gap-6 max-w-screen-lg m-auto ">
        {ListaServicios.map((s, key) => {
          return <Service {...s} key={key} />;
        })}
      </div>
      <h2 className="text-5xl font-light text-center">
        ¿Quieres una Cotización ?{" "}
      </h2>
      <p className="font-light text-center">
        Déjanos tus Datos y en Instantes te Contactaremos!
      </p>
      <QuotationForm />
    </div>
  );
};

export default Services;
