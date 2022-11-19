import React, { useRef, useState } from "react";

import GFI from "../../../assets/users/GlutenFree.svg";
import SFI from "../../../assets/users/SugarFree.svg";
import VI from "../../../assets/users/Vegan.svg";
import SI from "../../../assets/users/Spacy.svg";

import Form from "../../../components/users/forms/form";
import {
  InputImage,
  InputPromocionOpcional,
  InputT,
} from "../../../components/users/forms/inputs";

const CreateDishes = () => {
  const [glutenFree, setGlutenFree] = useState(false);
  const [sugarFree, setSugarFree] = useState(false);
  const [vegan, setVegan] = useState(false);
  const [spacy, setSpacy] = useState(false);
  return (
    <div className="flex flex-col items-center gap-4 p-2 pt-10 md:pt-2 w-full">
      <h2 className="w-full text-xl font-medium text-center md:text-justify">
        Crear nuevo platillo
      </h2>
      <Form>
        <InputT name="nombre" title="Nombre" />
        <InputT name="descripcion" title="Descripcion" />
        <InputT name="precio" title="Precio" />
        <div className="w-full">
          <label className="block font-medium">Caracteristicas:</label>
          <div className="flex gap-2">
            <div
              className="flex gap-2
            "
            >
              <input
                type="checkbox"
                name="caracteristicas"
                value="Vegano"
                id="caracteristicasVegano"
                hidden={true}
                onChange={(e) => setVegan(e.target.checked)}
              />
              <label htmlFor="caracteristicasVegano">
                <img
                  src={VI}
                  alt="Vegan"
                  className={
                    "cursor-pointer rounded-md " +
                    (vegan ? "bg-[#00EE00]" : "bg-c")
                  }
                />
              </label>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                name="caracteristicas"
                value="Sugar Free"
                hidden={true}
                onChange={(e) => setSugarFree(e.target.checked)}
                id="caracteristicasSugarFree"
              />
              <label htmlFor="caracteristicasSugarFree">
                {" "}
                <img
                  src={SFI}
                  alt="Sugar Free"
                  className={
                    "cursor-pointer rounded-md " +
                    (sugarFree ? "bg-[#007CEE]" : "bg-c")
                  }
                />
              </label>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                name="caracteristicas"
                value="Picante"
                hidden={true}
                onChange={(e) => setSpacy(e.target.checked)}
                id="caracteristicasPicante"
              />
              <label htmlFor="caracteristicasPicante">
                {" "}
                <img
                  src={SI}
                  alt="Picante"
                  className={
                    "cursor-pointer rounded-md " +
                    (spacy ? "bg-[#EE0000]" : "bg-c")
                  }
                />
              </label>
            </div>

            <div className="flex gap-2">
              <input
                type="checkbox"
                name="caracteristicas"
                value="Gluten Free"
                hidden={true}
                id="caracteristicasGlutenFree"
                onChange={(e) => setGlutenFree(e.target.checked)}
              />
              <label htmlFor="caracteristicasGlutenFree">
                <img
                  src={GFI}
                  alt="Gluten Free"
                  className={
                    "cursor-pointer rounded-md " +
                    (glutenFree ? "bg-[#EEBC00]" : "bg-c")
                  }
                />
              </label>
            </div>
          </div>
        </div>

        <InputPromocionOpcional />

        <InputImage />
        <button className="bg-c px-2 py-2 font-medium hover:bg-tg hover:text-white rounded-sm md:w-2/4 m-auto">
          Registrar nuevo platillo
        </button>
      </Form>
    </div>
  );
};

export default CreateDishes;
