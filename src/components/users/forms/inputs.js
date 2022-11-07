import { render } from "@testing-library/react";
import React from "react";
import { useRef } from "react";
import { useState } from "react";

export const InputT = ({ title, name, required = true }) => {
  return (
    <div className="w-full">
      <label className="block font-medium">{title}:</label>
      <input
        type="text"
        className="border-b-2 border-tc focus:border-tg outline-none py-1 w-full bg-transparent"
        required={required}
        name={"it" + name}
      />
    </div>
  );
};

export const InputWithList = ({ value, setValue, type, title }) => {
  const [showInput, setShowInput] = useState(false);
  const [val, setVal] = useState(value)
  const input = useRef();
  return (
    <div className="w-full">
      <label className="font-medium block">{title}:</label>
      <div>
        {value &&
          value.map((v, key) => (
            <div className="flex justify-between items-center border-b-2 py-1 border-b-tc hover:border-b-tg group" key={key}>
              <p className="w-full">{v}</p>
              <button
                type="button"
                className="text-tc hover:text-tg font-medium"
                onClick={() => {              
                  let val = value
                  val.splice(key, 1)
                  console.log(val)
                  setValue(val);
                  setVal([...val])
                }}
              >
                X
              </button>
            </div>
          ))}
      </div>
      {showInput && (
        <div className="flex gap-1">
          <input
            type={type}
            className="border-b-2 border-tc focus:border-tg w-full outline-none py-1 bg-transparent"
            ref={input}

          />
          <button
            className="bg-c hover:bg-tg hover:text-white rounded-sm font-medium px-2"
            type="button"
            onClick={() => {
              setValue([...value, input.current.value]);
              input.current.value = "";
              setShowInput(false);
            }}
          >
            +
          </button>
        </div>
      )}

      <button
        className="bg-c hover:bg-tg hover:text-white rounded-sm text-sm px-2 py-1 my-1 block w-full"
        onClick={() => setShowInput(!showInput)}
        type="button"
      >
        {showInput ? "Cancelar" : "Añadir"}
      </button>
    </div>
  );
};

export const InputSocialsWithList = ({ value, setValue, type, title }) => {
   const [showInput, setShowInput] = useState(false);
   const [val, setVal] = useState(value)
   const input1 = useRef();
   const input2 = useRef()
   return (
     <div className="w-full">
       <label className="font-medium block">{title}:</label>
       <div>
         {value &&
           value.map((v, key) => (
             <div className="flex justify-between items-center border-b-2 py-1 border-b-tc hover:border-b-tg group" key={key}>
               <p className="w-full">{v.title}</p>
               <button
                 type="button"
                 className="text-tc hover:text-tg font-medium"
                 onClick={() => {              
                   let val = value
                   val.splice(key, 1)
                   setValue(val);
                   setVal([...val])
                 }}
               >
                 X
               </button>
             </div>
           ))}
       </div>
       {showInput && (
         <div className="flex flex-col bg-c/20 rounded-sm p-1 gap-1">
            <div>
               <span>Red Social</span>
            <input
             type="text"
             className="border-b-2 border-tc focus:border-tg w-full outline-none py-1 bg-transparent"
             ref={input1}
 
           />
            </div>
            <div>
               <span>Link</span>
            <input
             type="text"
             className="border-b-2 border-tc focus:border-tg w-full outline-none py-1 bg-transparent"
             ref={input2}
 
           />
           </div>
           <button
             className="bg-c hover:bg-tg hover:text-white rounded-sm font-medium px-2 py-1 text-sm"
             type="button"
             onClick={() => {
               setValue([...value, {title: input1.current.value, link: input2.current.value}]);
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
         className="bg-c hover:bg-tg hover:text-white rounded-sm text-sm px-2 py-1 my-1 block w-full"
         onClick={() => setShowInput(!showInput)}
         type="button"
       >
         {showInput ? "Cancelar" : "Añadir"}
       </button>
     </div>
   );
 };
 