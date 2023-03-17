import React, { useContext, useEffect, useState } from "react";
import { StateContext } from "../context/StateContext";
import Recipe from "./Recipe";
import TopBanner from "./TopBanner";

const Recipes = () => {
  const { recipeCategories, selectedCate, setSelectedCate } =
    useContext(StateContext);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchData();
  }, [selectedCate]);

  const fetchData = async () => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCate}`
    );
    const data = await api.json();
    setRecipes(data.meals);
    // console.log(data.meals);
  };

  const cateChangeHandler = (e) => {
    setSelectedCate(e.target.value);
    // console.log(e.target.value);
  };

  return (
    <div>
      <TopBanner>Find Out Your Recipes Today!</TopBanner>
      {/* <h1 className="text-2xl mb-10 text-center font-medium">- Recipes -</h1> */}
      <div className="mb-10 md:mb-20 text-right">
        <select
          value={selectedCate}
          onChange={cateChangeHandler}
          className="my-custom-select outline-0 py-2 px-3 rounded appearance-none min-w-[100%] md:min-w-[220px] border border-slate-300 outline-none"
        >
          {recipeCategories.map((pCate, index) => {
            return (
              <option key={index} value={pCate.strCategory}>
                {pCate.strCategory}
              </option>
            );
          })}
        </select>
      </div>
      <div className="flex flex-wrap justify-start m-[-10px]">
        {recipes.map((recipe) => {
          return <Recipe item={recipe} key={recipe.idMeal} />;
        })}
      </div>
    </div>
  );
};

export default Recipes;
