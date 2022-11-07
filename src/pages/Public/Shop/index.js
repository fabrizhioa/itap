import React from "react";
import { Routes, Route } from "react-router-dom";
import { Productos } from "./Productos";

const Shop = () => {
  return (
    <div className="bg-bc min-h-screen w-full">
      <Routes>
        <Route path="/" element={<Productos />} />
      </Routes>
    </div>
  );
};

export default Shop;
