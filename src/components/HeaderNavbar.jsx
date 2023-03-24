import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { StateContext } from "../context/StateContext";
import { GiKnifeFork } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import { RiMenu3Fill } from "react-icons/ri";

const HeaderNavbar = () => {
  const { input, setInput } = useContext(StateContext);
  const navigate = useNavigate();
  const { selectedCate, setSelectedCate } = useContext(StateContext);
  const [dropdown, setDropdown] = useState(false);
  const location = useLocation();

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

  useEffect(() => {
    setDropdown(false);
    setInput("");
  }, [location]);

  return (
    <>
      <nav className="relative bg-black border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className="w-[100%] md:w-[100%] lg:w-[1024px] box-border py-5 px-3 md:px-0 flex flex-wrap items-center justify-between mx-auto">
          <Link to="/" onClick={homeResetHandler}>
            <GiKnifeFork className="text-5xl text-amber-400" />
          </Link>
          <button
            onClick={() => {
              setDropdown(!dropdown);
            }}
            className="block md:hidden text-3xl text-white"
          >
            {dropdown ? <VscChromeClose /> : <RiMenu3Fill />}
          </button>
          <div
            className={`${
              dropdown ? "block md:block" : "hidden md:block"
            } w-[96%] box-border md:w-auto absolute md:static z-50 inset-x-[2%] top-[100%]`}
          >
            <ul className="flex flex-col p-3 md:p-0 border border-gray-300 rounded-b-lg bg-gray-100 text-lg md:flex-row md:space-x-8 md:mt-0 md:text-normal md:font-medium md:border-0 md:bg-transparent items-normal md:items-center">
              <li>
                <NavLink to="/" className="block py-1 md:text-white">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="block py-1 md:text-white">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="block py-1 md:text-white">
                  Contact
                </NavLink>
              </li>
              <li>
                <form onSubmit={onSubmitHandler} className="mt-5 md:m-0">
                  <input
                    value={input}
                    type="text"
                    onChange={onChangeHandler}
                    className="my-custom-search outline-0 py-2 px-3 rounded appearance-none min-w-[100%] md:min-w-[220px] border border-gray-400 md:border-0 focus:outline-none"
                  />
                </form>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HeaderNavbar;
