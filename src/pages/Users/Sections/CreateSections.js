import React from "react";

import Form from "../../../components/users/forms/form";
import { InputImage, InputT } from "../../../components/users/forms/inputs";

const CreateSection = () => {
  return (
    <div className="flex flex-col items-center gap-4 p-2 pt-10 md:pt-2 w-full">
      <h2 className="w-full text-xl font-medium text-center md:text-justify">
        Crear nueva seccion
      </h2>
      <Form>
        <InputT name="nombre" title="Nombre" />
        <InputImage />

        <button className="bg-c px-2 py-2 font-medium hover:bg-tg hover:text-white rounded-sm md:w-2/4 m-auto">
          Registrar nueva seccion
        </button>
      </Form>
    </div>
  );
};

export default CreateSection;
