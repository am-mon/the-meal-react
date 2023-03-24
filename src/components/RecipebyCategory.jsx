import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import { StateContext } from "../context/StateContext";
import PageTemplate from "./PageTemplate";
import Recipe from "./Recipe";

const RecipebyCategory = () => {
  const [cateItems, setCateItems] = useState([]);
  const { cateName } = useParams();
  const { isLoading, setIsLoading } = useContext(StateContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${cateName}`
    );
    const data = await api.json();
    setCateItems(data.meals);
    // console.log(data.meals);
    setIsLoading(false);
  };

  return (
    <div className="mt-20">
      <PageTemplate>
        <h1 className="text-2xl mb-10 md:mb-20 text-center font-medium">
          - All {cateName} Recipes -
        </h1>
        {isLoading ? (
          <Loader />
        ) : (
          <div className="flex flex-wrap justify-start m-[-10px]">
            {cateItems.map((recipe) => {
              return <Recipe item={recipe} key={recipe.idMeal} />;
            })}
          </div>
        )}
      </PageTemplate>
    </div>
  );
};

export default RecipebyCategory;
