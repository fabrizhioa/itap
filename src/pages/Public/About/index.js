import React from "react";

const About = () => {
  return (
    <div className="bg-bc min-h-screen w-full grid auto-rows-auto gap-6 pt-6">
      <div className="text-center flex flex-col gap-4 p-4">
        <p>The Full Story</p>
        <h2 className="text-5xl font-light">Nosotros</h2>
        <p className="md:w-3/5 mx-auto font-extralight">
          Somos una Empresa de Tecnologías enfocada en la elaboración de
          Software y Hardware, 100% mexicana. Ayudamos a las organizaciones a
          superar la complejidad y encender la innovación con el fin de
          proporcionar un mejor rendimiento, confiabilidad, seguridad y
          flexibilidad, reducir costos de implementación y manejo de TI.
        </p>
      </div>
      <div className="grid auto-rows-max md:grid-cols-2">
        <img
          src="https://static.wixstatic.com/media/d4abae_e6933f3c74ae456b9756f085596860f2~mv2.jpg/v1/fill/w_506,h_413,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d4abae_e6933f3c74ae456b9756f085596860f2~mv2.jpg"
          alt="Mision"
          className="w-full order-1"
        />
        <div className="self-center text-center md:w-3/5 m-auto flex flex-col gap-4 order-2 p-4">
          <h4 className="text-4xl">Misión</h4>
          <p className="font-extralight">
            Brindar a nuestros socios soluciones tecnológicas innovadoras que
            mejoren la eficiencia y calidad de sus productos y servicios.
          </p>
        </div>
        <div className="self-center text-center md:w-3/5 m-auto flex flex-col gap-4 order-4 md:order-3 p-4">
          <h4 className="text-4xl">Visión</h4>
          <p className="font-extralight">
            Ser la mejor compañía en soluciones tecnológicas, mejorando
            continuamente nuestros productos y servicios.
          </p>
        </div>
        <img
          src="https://static.wixstatic.com/media/d4abae_a5eaaf569efd40af953c0c61bec866ee~mv2.jpg/v1/fill/w_506,h_413,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d4abae_a5eaaf569efd40af953c0c61bec866ee~mv2.jpg"
          className="w-full order-3 md:order-4" alt="Vision"
        />
      </div>
    </div>
  );
};

export default About;
