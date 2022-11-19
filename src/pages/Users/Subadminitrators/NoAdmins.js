import React from "react";
import { Link } from "react-router-dom";

import NoSubadmins from "../../../assets/users/nosubadmins.svg";
const NoAdmins = () => {
  return (
    <div className="grid w-full items-center justify-center">
      <div className="text-center flex items-center justify-center flex-col gap-4">
        <img src={NoSubadmins} alt="No Data" width={200} />
        <h2 className="text-3xl text-tc">
          Parece que no hay subadminstradores
        </h2>
        <Link
          className="text-lg bg-c hover:bg-tg p-2 rounded-sm hover:text-white shadow-md shadow-black/20 active:shadow-none"
          to="../create"
        >
          Crear nuevo subadministrador
        </Link>
      </div>
    </div>
  );
};

export default NoAdmins;
