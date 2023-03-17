import React, { Children, useContext } from "react";
import { StateContext } from "../context/StateContext";

const TopBanner = ({ children }) => {
  const { random } = useContext(StateContext);
  return (
    <div>
      <div
        style={{ backgroundImage: "url(" + random.strMealThumb + ")" }}
        className="my-custom-top-banner"
      >
        <h1 className="text-2xl md:text-4xl text-gray-800">{children}</h1>
      </div>
    </div>
  );
};

export default TopBanner;
