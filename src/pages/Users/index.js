import React from "react";
import { Route, Routes } from "react-router-dom";
import SideMenu from "../../components/users/sideMenu";
import Dishes from "./Dishes";
import Menu from "./Menus";
import Restaurants from "./Restaurants";
import Sections from "./Sections";

const Users = () => {
  return (
    <div className="grid md:grid-cols-[240px_auto] min-h-screen w-full relative">
      <SideMenu />
      <Routes>
        <Route path="/" end element={<div>Testing</div>} />
        <Route path="restaurants/*" element={<Restaurants />} />
        <Route path="platillos/*" element={<Dishes />} />
        <Route path="menus/*" element={<Menu />} />
        <Route path="sections/*" element={<Sections />} />
      </Routes>
    </div>
  );
};

export default Users;
