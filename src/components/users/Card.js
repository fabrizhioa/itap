import React from "react";
import { MdClose } from "react-icons/md";

export const Card = ({ children, closeHandleButton }) => {
  return (
    <div className="z-20 absolute top-0 left-0  bg-tc/20 h-full w-full flex place-items-center place-content-center">
      <div className="bg-white shadow-md p-2 rounded-md">
        <div className="flex justify-end">
          <button
            onClick={closeHandleButton}
            className="text-xl font-medium text-tc hover:bg-tg hover:text-white p-1 hover:shadow-sm rounded-full flex items-center justify-center"
          >
            <MdClose />
          </button>
        </div>
        <div className="flex flex-col gap-2">{children}</div>
      </div>
    </div>
  );
};
