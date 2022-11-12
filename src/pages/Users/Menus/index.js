import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateMenu from "./CreateMenus";
import NoMenus from "./NoMenus";

const Menu = () => {
  return (
    <Routes>
      <Route path="/" end element={<NoMenus />} />
      <Route path="/create" element={<CreateMenu />} />
    </Routes>
  );
};

export default Menu;
