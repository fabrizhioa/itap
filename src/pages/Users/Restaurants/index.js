import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateRestaurant from "./CreateRestaurant";
import ListRestaurants from "./ListRestaurants";
import NoRestaurants from "./NoRestaurants";

const Restaurants = () => {
  //Logica para jalar la data de los restaurantes

  return (
    <Routes>
      <Route path="/" element={<ListRestaurants />} />
      <Route path="/create" element={<CreateRestaurant />} />
    </Routes>
  );
};

export default Restaurants;
