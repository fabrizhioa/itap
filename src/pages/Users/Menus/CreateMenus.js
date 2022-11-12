import React from "react";

import Form from "../../../components/users/forms/form";
import { InputT } from "../../../components/users/forms/inputs";

const CreateMenu = () => {
  return (
    <div className="flex flex-col items-center gap-4 p-2 pt-10 md:pt-2 w-full">
      <h2 className="w-full text-xl font-medium text-center md:text-justify">
        Crear nuevo menu
      </h2>
      <Form>
        <InputT name="nombre" title="Nombre" />
        <InputT name="horario" title="Horario" />

        <button className="bg-c px-2 py-2 font-medium hover:bg-tg hover:text-white rounded-sm md:w-2/4 m-auto">
          Registrar nuevo menu
        </button>
      </Form>
    </div>
  );
};

export default CreateMenu;
