import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateAdmin from "./CreateAdmin";
import NoAdmins from "./NoAdmins";

const Subadmins = () => {
  return (
    <Routes>
      <Route path="/" end element={<NoAdmins />} />
      <Route path="/create" element={<CreateAdmin />} />
    </Routes>
  );
};

export default Subadmins;
