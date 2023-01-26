import React from "react";
import { Route, Routes } from "react-router-dom";
import Cafecho from "./Cafecho";
import Drinks from "./Drinks";

const Examples = () => {
  return (
    <Routes>
      <Route path="cafecho" element={<Cafecho />} />
      <Route path="drink" element={<Drinks />} />
    </Routes>
  );
};

export default Examples;
