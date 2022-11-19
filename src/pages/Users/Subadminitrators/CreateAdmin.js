import React from "react";

import Form from "../../../components/users/forms/form";
import { InputSelect, InputT } from "../../../components/users/forms/inputs";

const CreateAdmin = () => {
  return (
    <div className="flex flex-col items-center gap-4 p-2 pt-10 md:pt-2 w-full">
      <h2 className="w-full text-xl font-medium text-center md:text-justify">
        Crear nuevo subadministrador
      </h2>
      <Form>
        <InputT name="nombre" title="Nombre" />
        <InputT name="apellido" title="Apellido" />
        <InputT name="correo" title="Correo" type="email" />
        <InputT name="clave" title="Contraseña" type="password" />
        <InputT name="Reclave" title="Repetir Contraseña" type="password" />
        <InputSelect
          name="restaurante"
          title="Restaurante"
          data={[
            { title: "opcion 1", value: "1" },
            { title: "opcion 2", value: "2" },
          ]}
        />

        <button className="bg-c px-2 py-2 font-medium hover:bg-tg hover:text-white rounded-sm md:w-2/4 m-auto">
          Registrar nuevo
        </button>
      </Form>
    </div>
  );
};

export default CreateAdmin;
