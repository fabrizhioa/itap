import React from "react";
import { useState } from "react";
import Form from "../../../components/users/forms/form";
import {
  InputImage,
  InputSocialsWithList,
  InputT,
  InputWithList,
} from "../../../components/users/forms/inputs";

const CreateRestaurant = () => {
  const [phoneValue, setPhoneValue] = useState([]);
  const [directionValue, setDirectionValue] = useState([]);
  const [timesValue, setTimesValue] = useState([]);
  const [socialValue, setSocialValue] = useState([]);

  return (
    <div className="flex flex-col items-center gap-4 p-2 pt-10 md:pt-2 w-full">
      <h2 className="w-full text-xl font-medium text-center md:text-justify">
        Crear nuevo restaurante
      </h2>
      <Form>
        <InputT name="nombre" title="Nombre" />

        <InputWithList
          value={phoneValue}
          setValue={setPhoneValue}
          type="tel"
          title="Telefonos"
        />
        <InputWithList
          value={directionValue}
          setValue={setDirectionValue}
          type="tel"
          title="Direcciones"
        />
        <InputWithList
          value={timesValue}
          setValue={setTimesValue}
          type="tel"
          title="Horarios"
        />
        <InputSocialsWithList
          value={socialValue}
          setValue={setSocialValue}
          type="tel"
          title="Redes sociales"
        />

        <InputImage />
        <button className="bg-c px-2 py-2 font-medium hover:bg-tg hover:text-white rounded-sm md:w-2/4 m-auto">
          Registrar nuevo restaurante
        </button>
      </Form>
    </div>
  );
};

export default CreateRestaurant;
