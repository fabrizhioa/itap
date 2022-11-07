import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import Shop from "./Shop";
import Products from "./Products";
import Benefits from "./Benefits";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact"
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

const Public = () => {
  return (
   <>
   <NavBar />
    <Routes>
      <Route path="/" end element={<Home />} />
      <Route path="/shop/*" element={<Shop />} />
      <Route path="/product-page/:id" element={<Products />} />
      <Route path="/benefits" element={<Benefits />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer/>
    </>
  );
};

export default Public;
