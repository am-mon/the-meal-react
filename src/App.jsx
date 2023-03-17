import React, { useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Detail from "./components/Detail";
import ErrorPage from "./components/ErrorPage";
import Footer from "./components/Footer";
import HeaderNavbar from "./components/HeaderNavbar";
import RecipebyCategory from "./components/RecipebyCategory";
import Search from "./components/Search";
import { StateContext } from "./context/StateContext";
import Recipes from "./components/Recipes";

const App = () => {
  const { random } = useContext(StateContext);
  return (
    <div>
      <HeaderNavbar />
      {/* <div
        style={{ backgroundImage: "url(" + random.strMealThumb + ")" }}
        className="my-custom-top-banner mt-[-5em]"
      >
        <h1 className="text-2xl md:text-4xl text-gray-800">
          Find Out Your Recipes Today!
        </h1>
      </div> */}
      <div className="w-[100%] md:w-[100%] lg:w-[1024px] mx-auto px-4 md:px-0 xl:px-0 whitespace-normal box-border">
        <Routes>
          <Route path="/" element={<Recipes />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/search/:name" element={<Search />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/category/:cateName" element={<RecipebyCategory />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
