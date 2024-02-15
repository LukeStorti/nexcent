import logo from "../assets/logo.png";
import { navLinks } from "../constants";
import Button from "./Button";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";
import { useState } from "react";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center">
      <img src={logo} alt="logo" className="w-[154px] h-[24px]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((link, index) => (
          <li
            key={link.id}
            className={`font-poppins font-medium cursor-pointer text-[16px] text-gray-500 hover:text-black ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>
      <div className="hidden md:flex items-center mx-6 justify-between text-[16px] space-x-4">
        <a href="login" className="font-poppins text-primary ">
          Login
        </a>
        <Button label="Sign Up" />
      </div>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain fill-primary"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-primary absolute top-20 right-0 mx-4 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((link, index) => (
              <li
                key={link.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                }`}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
