import React from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const Recipe = ({ item }) => {
  return (
    <div className="my-custom-item-wrap w-[50%] md:w-[33.33%] lg:w-[33.33%] box-border px-[5px] md:px-[10px] mb-7 text-center">
      <Link to={`/detail/${item.idMeal}`}>
        <img src={item.strMealThumb} className="rounded" />
        {/* <h3 className='p-2 text-lg'>{item.strMeal}</h3> */}
        <span className="my-custom-item-search">
          <FiSearch className="text-2xl bg-black rounded-[50%] p-2 box-content text-amber-400" />
        </span>
      </Link>
    </div>
  );
};

export default Recipe;
