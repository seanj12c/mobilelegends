import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from "../assets/logo.png";

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [fix, setFix] = useState(false);

  function setFixed() {
    if (window.scrollY >= 100) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  window.addEventListener("scroll", setFixed);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      className={`${
        fix
          ? "bg-black bg-opacity-90 transition-all ease-in-out duration-500 "
          : ""
      } flex justify-between items-center h-24 mx-auto md:px-10 px-6  fixed top-0 w-full bg-transparent text-black md:w-full z-50`}
    >
      <a href="#home">
        <img className="w-32 md:w-44" src={logo} alt="" />
      </a>
      <ul className="hidden md:flex font-semibold">
        <a href="#home">
          <li className="p-4 hover:text-white text-primary">Home</li>
        </a>
        <a href="#about">
          <li className="p-4 hover:text-white text-primary">About</li>
        </a>
        <a href="#features">
          <li className="p-4 hover:text-white text-primary">Features</li>
        </a>
        <a href="#contact">
          <li className="py-4 pl-4 hover:text-white text-primary">Contact</li>
        </a>
      </ul>

      <div onClick={handleNav} className={`block text-primary md:hidden`}>
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%] "
        }
      >
        <a href="#home">
          <img className="w-32 object-contain mt-4 ml-4" src={logo} alt="" />
        </a>

        <ul className="uppercase p-4">
          <a onClick={handleNav} href="#home">
            <li className="p-4 border-b border-white text-primary active:bg-white">
              Home
            </li>
          </a>
          <a onClick={handleNav} href="#about">
            <li className="p-4 border-b border-white text-primary active:bg-white">
              About
            </li>
          </a>
          <a onClick={handleNav} href="#features">
            <li className="p-4 border-b border-white text-primary active:bg-white">
              Features
            </li>
          </a>
          <a onClick={handleNav} href="#contact">
            <li className="p-4 border-b border-white text-primary active:bg-white">
              Contact
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
};
