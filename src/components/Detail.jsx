import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsYoutube } from "react-icons/bs";

const Detail = () => {
  const { id } = useParams();

  const [recipe, setRecipe] = useState({});
  const [ingre, setIngre] = useState([]);
  const [activeTab, setActiveTab] = useState("tab01");

  useEffect(() => {
    const ingredients = [
      { id: 1, name: recipe.strIngredient1, measure: recipe.strMeasure1 },
      { id: 2, name: recipe.strIngredient2, measure: recipe.strMeasure2 },
      { id: 3, name: recipe.strIngredient3, measure: recipe.strMeasure3 },
      { id: 4, name: recipe.strIngredient4, measure: recipe.strMeasure4 },
      { id: 5, name: recipe.strIngredient5, measure: recipe.strMeasure5 },
      { id: 6, name: recipe.strIngredient6, measure: recipe.strMeasure6 },
    ];
    setIngre(ingredients);
  }, [recipe]);

  // console.log(ingre);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = await api.json();
    setRecipe(data.meals[0]);
    // console.log(data.meals[0]);
  };

  return (
    <div>
      <div className="flex flex-wrap justify-center">
        <div className="w-[100%] md:w-[50%] lg:w-[50%] box-border px-0 md:pr-5 mb-5 ">
          <img src={recipe.strMealThumb} className="w-[100%]" />
        </div>
        <div className="w-[100%] md:w-[50%] lg:w-[50%] box-border px-0 pr-2 md:pl-5 mb-5 ">
          <h1 className="text-2xl mt-2">{recipe.strMeal}</h1>
          <p className="mt-2 text-gray-400 text-sm">
            Category: {recipe.strCategory}
            <br />
            Tags: {recipe.strTags}
          </p>
          <div className="my-3">
            <ul className="flex items-center my-4">
              <li className="mr-2">
                <button
                  onClick={() => setActiveTab("tab01")}
                  className={`py-2 px-3 rounded ${
                    activeTab === "tab01" ? "bg-amber-400" : "bg-gray-100"
                  }`}
                >
                  Instructions
                </button>
              </li>
              <li className="mr-2">
                <button
                  onClick={() => setActiveTab("tab02")}
                  className={`py-2 px-3 rounded ${
                    activeTab === "tab02" ? "bg-amber-400" : "bg-gray-100"
                  }`}
                >
                  Ingredients
                </button>
              </li>
              <li className="mr-2">
                <button
                  onClick={() => setActiveTab("tab03")}
                  className={`py-2 px-3 rounded ${
                    activeTab === "tab03" ? "bg-amber-400" : "bg-gray-100"
                  }`}
                >
                  References
                </button>
              </li>
            </ul>

            {activeTab === "tab01" && (
              <div className="text-sm">{recipe.strInstructions}</div>
            )}

            {activeTab === "tab02" && (
              <div className="text-sm">
                <ul>
                  {ingre.map((item) => {
                    return (
                      <li key={item.id}>
                        - {item.name}: {item.measure}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            {activeTab === "tab03" && (
              <div>
                <p>
                  <a href={recipe.strYoutube} target="_blank">
                    <BsYoutube className="text-4xl hover:text-red-500" />
                  </a>
                </p>
                {recipe.strSource && (
                  <p className="mt-4 text-sm italic text-gray-400">
                    Reference:
                    <a
                      href={recipe.strSource}
                      target="_blank"
                      className="mt-4 text-sm italic hover:text-gray-800 break-words"
                    >
                      {recipe.strSource}
                    </a>
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
