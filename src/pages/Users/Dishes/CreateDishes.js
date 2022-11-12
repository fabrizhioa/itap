import React from "react";

import Form from "../../../components/users/forms/form";
import {
  InputImage,
  InputPromocionOpcional,
  InputT,
} from "../../../components/users/forms/inputs";

const CreateDishes = () => {
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
          <div className="grid grid-cols-2 gap-2">
            <div
              className="flex gap-2
            "
            >
              <input
                type="checkbox"
                name="caracteristicas"
                value="Vegano"
                id="caracteristicasVegano"
              />
              <label htmlFor="caracteristicasVegano">Vegano</label>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                name="caracteristicas"
                value="Sugar Free"
                id="caracteristicasSugarFree"
              />
              <label htmlFor="caracteristicasSugarFree">Sugar Free</label>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                name="caracteristicas"
                value="Picante"
                id="caracteristicasPicante"
              />
              <label htmlFor="caracteristicasPicante">Picante</label>
            </div>

            <div className="flex gap-2">
              <input
                type="checkbox"
                name="caracteristicas"
                value="Gluten Free"
                id="caracteristicasGlutenFree"
              />
              <label htmlFor="caracteristicasGlutenFree">Gluten Free</label>
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
