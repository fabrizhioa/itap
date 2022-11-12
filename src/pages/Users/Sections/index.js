import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateSection from "./CreateSections";
import NoSections from "./NoSections";

const Sections = () => {
  return (
    <Routes>
      <Route path="/" end element={<NoSections />} />
      <Route path="/create" element={<CreateSection />} />
    </Routes>
  );
};

export default Sections;
