import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateDishes from "./CreateDishes";
import ListDishes from "./ListDishes";
const Dishes = () => {
  return (
    <Routes>
      <Route path="/" end element={<ListDishes />} />
      <Route path="/create" element={<CreateDishes />} />
    </Routes>
  );
};

export default Dishes;
