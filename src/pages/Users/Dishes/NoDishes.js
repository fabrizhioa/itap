import React from "react";
import { MdError } from "react-icons/md";
import { Link } from "react-router-dom";

import NoDataImage from "../../../assets/users/nodata.svg";

const NoDishes = () => {
  return (
    <div className="grid w-full items-center justify-center">
      <div className="text-center flex items-center justify-center flex-col gap-4">
        <img src={NoDataImage} alt="No Data" width={200} />
        <h2 className="text-3xl text-tc">Parece que no hay platillos</h2>
        <Link
          className="text-lg hover:bg-tg bg-c p-2 rounded-sm hover:text-white shadow-md  shadow-black/20 active:shadow-none"
          to="../create"
        >
          Crea un nuevo platillo
        </Link>
      </div>
    </div>
  );
};

export default NoDishes;
