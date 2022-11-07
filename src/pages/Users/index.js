import React from "react";
import { Route, Routes } from "react-router-dom";
import SideMenu from "../../components/users/sideMenu";
import Restaurants from "./Restaurants";

const Users = () => {
  return (
    <div className="grid grid-cols-[240px_auto] min-h-screen w-full">
      <SideMenu />
      <Routes>
        <Route path="/" end element={<div>Testing</div>} />
        <Route path="restaurants/*" element={<Restaurants />} />
      </Routes>
    </div>
  );
};

export default Users;
