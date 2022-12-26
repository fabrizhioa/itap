import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateMenu from "./CreateMenus";
import ListMenus from "./ListMenus";

const Menu = () => {
  return (
    <Routes>
      <Route path="/" end element={<ListMenus />} />
      <Route path="/create" element={<CreateMenu />} />
    </Routes>
  );
};

export default Menu;
