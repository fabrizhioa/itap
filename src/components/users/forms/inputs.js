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
              className="flex justify-between items-center gap-2 group"
              key={key}
            >
              <p className="w-full border-b-2 border-b-c hover:border-b-tg py-2">
                {v}
              </p>
              <button
                type="button"
                className="bg-red-300 text-white hover:bg-red-500 rounde-md w-max rounded-sm h-max font-medium p-2 flex aspect-square "
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

export const InputSocialsWithList = ({ value, setValue, type, title }) => {
  const [showInput, setShowInput] = useState(false);
  const [val, setVal] = useState(value);
  console.log(val);
  const input1 = useRef();
  const input2 = useRef();
  return (
    <div className="w-full">
      <label className="font-medium block">{title}:</label>
      <div>
        {value &&
          value.map((v, key) => (
            <div
              className="flex justify-between items-center border-b-2 p-1 border-b-c hover:border-b-tg group"
              key={key}
            >
              <p className="w-full">{v.title}</p>
              <button
                type="button"
                className="text-c hover:text-tg font-medium"
                onClick={() => {
                  let val = value;
                  val.splice(key, 1);
                  setValue(val);
                  setVal([...val]);
                }}
              >
                X
              </button>
            </div>
          ))}
      </div>
      {showInput && (
        <div className="flex flex-col bg-c/20 rounded-sm p-1 gap-1 mt-1">
          <div>
            <span>Red Social</span>
            <input
              type="text"
              className="border-2 rounded-md border-c focus:border-tg w-full outline-none p-1 bg-transparent"
              ref={input1}
            />
          </div>
          <div>
            <span>Link</span>
            <input
              type="text"
              className="border-2 rounded-md border-c focus:border-tg w-full outline-none p-1 bg-transparent"
              ref={input2}
            />
          </div>
          <button
            className="bg-c hover:bg-tg hover:text-white rounded-sm font-medium px-2 py-1 text-sm"
            type="button"
            onClick={() => {
              setValue([
                ...value,
                { title: input1.current.value, link: input2.current.value },
              ]);
              input1.current.value = "";
              input2.current.value = "";
              setShowInput(false);
            }}
          >
            Agregar
          </button>
        </div>
      )}

      <button
        className="bg-c hover:bg-tg hover:text-white rounded-sm text-sm p-2 my-1 block w-full"
        onClick={() => setShowInput(!showInput)}
        type="button"
      >
        {showInput ? "Cancelar" : "Añadir"}
      </button>
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
    <div className="w-full relative">
      <span className="block font-medium">Imagen:</span>
      {imageValue !== null ? (
        <div className="relative aspect-square">
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
        <>
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
            className="w-full aspect-square border-2 border-bc border-dashed hover:border-tg rounded-sm flex flex-col items-center justify-center"
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
        </>
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
