import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { StateContext } from "../context/StateContext";
import { GiKnifeFork } from "react-icons/gi";
import { HiMenuAlt1 } from "react-icons/hi";

const Navbar = () => {
  const { input, setInput } = useContext(StateContext);
  const navigate = useNavigate();
  const { selectedCate, setSelectedCate } = useContext(StateContext);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    navigate(`/search/${input}`);
  };

  const onChangeHandler = (e) => {
    setInput(e.target.value);
  };

  const homeResetHandler = (e) => {
    setSelectedCate("Beef");
    setInput("");
  };

  return (
    <div>
      <nav className="z-50 bg-amber-300 border-gray-200 dark:bg-gray-900 dark:border-gray-700 mb-20">
        <div className="w-[100%] md:w-[100%] lg:w-[1024px] box-border py-5 px-3 md:px-0 flex flex-wrap items-center justify-between mx-auto">
          <Link to="/" onClick={homeResetHandler}>
            <GiKnifeFork className="text-5xl text-orange-700" />
          </Link>
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-normal text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <HiMenuAlt1 className="text-2xl text-black" />
          </button>
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-dropdown"
          >
            <ul className="flex flex-col p-3 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 text-normal md:flex-row md:space-x-8 md:mt-0 md:text-normal md:font-medium md:border-0 md:bg-transparent items-normal md:items-center">
              <li>
                <NavLink
                  to="/"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <form onSubmit={onSubmitHandler} className="mt-5 md:m-0">
                  <input
                    value={input}
                    type="text"
                    onChange={onChangeHandler}
                    className="my-custom-search outline-0 py-2 px-3 rounded appearance-none min-w-[100%] md:min-w-[220px] md:border-0 focus:outline-none"
                  />
                </form>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
