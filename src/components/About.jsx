import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StateContext } from "../context/StateContext";
import TopBanner from "./TopBanner";

const About = () => {
  const { cateList } = useContext(StateContext);

  return (
    <div>
      <TopBanner>About</TopBanner>
      <div className="mb-20">
        <p className="mb-10 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum rem
          perferendis ipsum natus, quasi distinctio possimus minima repellendus
          nobis error fugiat, id odio dolorum quaerat quia, molestias facilis.
          In, aliquam! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Voluptas quibusdam perferendis doloribus autem non culpa recusandae
          nemo eum! Magnam quos accusamus vel itaque laboriosam ad voluptas,
          recusandae nihil iste soluta!
        </p>
      </div>

      <div>
        <h2 className="text-2xl mb-10 text-center font-normal">
          Recipes by Category
        </h2>
        <div className="flex flex-wrap justify-start">
          {cateList.map((cat) => {
            return (
              <div
                key={cat.idCategory}
                className="my-custom-cate-wrap w-[48%] md:w-[31.333%] lg:w-[18%] box-border mx-[1%] py-4 mb-7 text-center border-b-4 border-black"
              >
                <Link to={`/category/${cat.strCategory}`}>
                  <div>
                    <img src={cat.strCategoryThumb} />
                  </div>
                  <div className="mt-5">{cat.strCategory}</div>
                  <span className="my-custom-cate-view underline decoration-1 text-sm">
                    View all <br />
                    {cat.strCategory} recipes{" "}
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
