import React from "react";
import { useRef } from "react";
import { useState } from "react";
import UploadImage from "../../../assets/users/upload.svg";

export const InputT = ({ title, name, required = true, type = "text" }) => {
  return (
    <div className="w-full">
      <label className="block font-medium">{title}:</label>
      <input
        type={type}
        className="border-2 rounded-md border-c focus:border-tg outline-none p-1 w-full bg-transparent"
        required={required}
        name={"it" + name}
      />
    </div>
  );
};

export const InputWithList = ({ value, setValue, type, title }) => {
  const [val, setVal] = useState(value);
  const input = useRef();
  console.log(val);
  return (
    <div className="w-full">
      <label className="font-medium block">{title}:</label>
      <div>
        {value &&
          value.map((v, key) => (
            <div
              className="flex justify-between items-center group rounded-md overflow border-collapse "
              key={key}
            >
              <p className="w-full p-1 border-red-300 hover:border-red-500 border-2 rounded-l-md group-hover:border-red-500">
                {v}
              </p>
              <button
                type="button"
                className="bg-red-300 text-white hover:bg-red-500 border-red-300 hover:border-red-500 border-2 rounded-r-md  w-max h-max font-medium py-1 px-2 flex aspect-square "
                onClick={() => {
                  let val = value;
                  val.splice(key, 1);
                  console.log(val);
                  setValue(val);
                  setVal([...val]);
                }}
              >
                X
              </button>
            </div>
          ))}
      </div>

      <div className="flex gap-1 mt-1">
        <input
          type={type}
          className="border-2 rounded-md border-c focus:border-tg w-full outline-none p-1 bg-transparent"
          ref={input}
        />
        <button
          className="bg-c hover:bg-tg hover:text-white rounded-sm font-medium px-2"
          type="button"
          onClick={() => {
            setValue([...value, input.current.value]);
            input.current.value = "";
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export const InputHours = ({ value, setValue }) => {
  const [modal, setModal] = useState(false);
  return (
    <div className="w-full">
      <label className="font-medium block">Horarios:</label>
      <div>
        {value &&
          value.map((v, key) => (
            <div
              className="flex justify-between items-center group rounded-md overflow border-collapse "
              key={key}
            >
              <p className="w-full p-1 border-red-300 hover:border-red-500 border-2 rounded-l-md group-hover:border-red-500">
                {v.title}
              </p>
              <button
                type="button"
                className="bg-red-300 text-white hover:bg-red-500 border-red-300 hover:border-tlred-500 border-2 rounded-r-md  w-max h-max font-medium py-1 px-2 flex aspect-square "
                onClick={() => {
                  let val = value;
                  val.splice(key, 1);
                  setValue(val);
                }}
              >
                X
              </button>
            </div>
          ))}
      </div>

      <button
        className="bg-c hover:bg-tg hover:text-white rounded-md font-medium p-1 w-full"
        type="button"
        onClick={() => setModal(true)}
      >
        Añadir
      </button>

      {modal && (
        <div className="min-h-screen w-full bg-gray-50/40 top-0 left-0 fixed z-20 flex items-center justify-center">
          <div className="bg-white shadow-md p-2 rounded-md min-w-[250px] max-w-[90%]">
            <h2 className="text-tc text-lg font-medium">
              Agregar nuevo horario
            </h2>
            <div className="flex flex-col gap-1">
              <span className="font-medium">Titulo:</span>
              <input
                type="text"
                className="w-full border-2 border-c focus:border-tg rounded-md outline-none"
              />
            </div>
            <div className="flex flex-col  gap-1">
              <span className="font-medium">Dias:</span>

              <div className="flex flex-wrap gap-2">
                <div className="flex gap-2 p-2 border-[1px] rounded-md border-gray-300">
                  <input type="checkbox" name="lunes" className="accent-tg" />
                  <span>Lunes</span>
                </div>
                <div className="flex gap-2 p-2 border-[1px] rounded-md border-gray-300">
                  <input type="checkbox" name="martes" className="accent-tg" />
                  <span>Martes</span>
                </div>
                <div className="flex gap-2 p-2 border-[1px] rounded-md border-gray-300">
                  <input
                    type="checkbox"
                    name="miercoles"
                    className="accent-tg"
                  />
                  <span>Miercoles</span>
                </div>
                <div className="flex gap-2 p-2 border-[1px] rounded-md border-gray-300">
                  <input type="checkbox" name="jueves" className="accent-tg" />
                  <span>Jueves</span>
                </div>
                <div className="flex gap-2 p-2 border-[1px] rounded-md border-gray-300">
                  <input type="checkbox" name="viernes" className="accent-tg" />
                  <span>Viernes</span>
                </div>
                <div className="flex gap-2 p-2 border-[1px] rounded-md border-gray-300">
                  <input type="checkbox" name="sabados" className="accent-tg" />
                  <span>Sabados</span>
                </div>
                <div className="flex gap-2 p-2 border-[1px] rounded-md border-gray-300">
                  <input
                    type="checkbox"
                    name="domingos"
                    className="accent-tg"
                  />
                  <span>Domingo</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-medium">Hora de inicio:</span>
              <input
                type="time"
                name="inicio"
                id=""
                className="w-full border-2 border-c focus:border-tg rounded-md outline-none"
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-medium">Hora de cierre:</span>
              <input
                type="time"
                name="cierre"
                id=""
                className="w-full border-2 border-c focus:border-tg rounded-md outline-none"
              />
            </div>
            <div className="flex justify-between pt-2">
              <button
                type="button"
                className="py-2 px-2 bg-c hover:bg-tg uppercase hover:text-white hover:cursor-pointer rounded-md shadow-md active:shadow-none shadow-tc/30 font-medium"
              >
                agregar
              </button>
              <button
                type="button"
                className="py-2 px-2 bg-red-500 uppercase hover:bg-red-600 hover:text-white hover:cursor-pointer rounded-md shadow-md active:shadow-none shadow-tc/30 font-medium"
                onClick={() => setModal(false)}
              >
                cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const InputSocialsWithList = ({ title }) => {
  return (
    <div className="w-full">
      <label className="font-medium block">{title}:</label>

      <div>
        <span>Facebook</span>
        <input
          type="text"
          className="border-2 rounded-md border-c focus:border-tg w-full outline-none p-1 bg-transparent"
          name="facebookURL"
        />
      </div>
      <div>
        <span>Instagram</span>
        <input
          type="text"
          className="border-2 rounded-md border-c focus:border-tg w-full outline-none p-1 bg-transparent"
          name="instagramURL"
        />
      </div>
      <div>
        <span>Uber Eats</span>
        <input
          type="text"
          className="border-2 rounded-md border-c focus:border-tg w-full outline-none p-1 bg-transparent"
          name="uberURL"
        />
      </div>
      <div>
        <span>Rappi</span>
        <input
          type="text"
          className="border-2 rounded-md border-c focus:border-tg w-full outline-none p-1 bg-transparent"
          name="rappiURL"
        />
      </div>
      <div>
        <span>Trip Advisor</span>
        <input
          type="text"
          className="border-2 rounded-md border-c focus:border-tg w-full outline-none p-1 bg-transparent"
          name="tripURL"
        />
      </div>
      <div>
        <span>Yelp</span>
        <input
          type="text"
          className="border-2 rounded-md border-c focus:border-tg w-full outline-none p-1 bg-transparent"
          name="yelp"
        />
      </div>
    </div>
  );
};

export const InputSelect = ({ title, name, required = true, data }) => {
  return (
    <div className="w-full">
      <label className="font-medium block">{title}:</label>
      <select
        name={name}
        required={required}
        className="border-2 rounded-md border-c focus:border-tg w-full outline-none p-1 bg-transparent"
      >
        {data.map((opt, key) => (
          <option
            value={opt.value}
            key={key}
            className="hover:bg-tg hover:text-white"
          >
            {opt.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export const InputImage = () => {
  const [imageValue, setImageValue] = useState(null);
  const inputReference = useRef();
  const buttonRef = useRef();

  const DragStart = () =>
    (buttonRef.current.textContent = "Soltar para guardar");
  const DragLeave = () => (buttonRef.current.textContent = "Subir Imagen");
  const DropFile = () => (buttonRef.current.textContent = "Subir Imagen");

  return (
    <div className="w-full  group">
      <span className="block font-medium">Imagen:</span>
      {imageValue !== null ? (
        <div className="relative aspect-square ">
          <button
            onClick={() => {
              setImageValue(null);
            }}
            type="button"
            className="text-white hover:bg-red-500 drop-shadow-lg  absolute top-1 aspect-square right-1 z-10 text-lg py-1 px-2 bg-red-300 rounded-sm"
          >
            X
          </button>
          <img
            src={URL.createObjectURL(imageValue)}
            alt="preview"
            className="w-full aspect-square"
          />
        </div>
      ) : (
        <div className="relative aspect-square">
          <input
            type="file"
            className="w-full h-full absolute top-0 left-0 opacity-0 cursor-pointer"
            id="imageSubmit"
            ref={inputReference}
            onChange={(e) => {
              setImageValue(e.target.files[0]);
            }}
          />

          <div
            className="w-full aspect-square border-2 border-bc border-dashed group-hover:border-tg rounded-md flex flex-col items-center justify-center"
            draggable
            onDragStart={DragStart}
            onDrop={DropFile}
            onDragLeave={DragLeave}
          >
            <img src={UploadImage} className="w-2/4" alt="upload icon" />
            <p
              className="p-2  text-tc rounded-sm px-4"
              type="button"
              ref={buttonRef}
              onClick={() => {
                inputReference.current.click();
              }}
            >
              Clickea o Arrasta una imagen
            </p>
          </div>
        </div>
      )}{" "}
    </div>
  );
};

export const InputPromocionOpcional = () => {
  const [promo, setPromo] = useState(false);
  return (
    <div className="w-full">
      <div className="flex gap-2">
        <label htmlFor="promocion" className="block font-medium">
          Promoción:
        </label>
        <input
          type="checkbox"
          name="Promocion"
          id="promocion"
          onChange={() => setPromo(!promo)}
          checked={promo}
        />
      </div>
      {promo && (
        <div>
          <div>
            <label htmlFor="" className="block font-medium">
              Dia de promoción:
            </label>
            <select
              name="PromocionDay"
              id=""
              className="border-2 rounded-md border-c focus:border-tg w-full outline-none p-1 bg-transparent"
            >
              <option value="">Seleccionar</option>
              <option value="lunes">Lunes</option>
              <option value="martes">Martes</option>
              <option value="miercoles">Miercoles</option>
              <option value="jueves">Jueves</option>
              <option value="viernes">Viernes</option>
              <option value="sabado">Sabado</option>
              <option value="domingo">Domingo</option>
            </select>
          </div>

          <InputT name="PromocionDesc" title="Descripcion de promocion" />
        </div>
      )}
    </div>
  );
};
