import React from "react";
import { Route, Routes } from "react-router-dom";
import Examples from "./Examples";

const Clients = () => {
  return (
    <Routes>
      <Route path="examples/*" element={<Examples />} />
    </Routes>
  );
};

export default Clients;
