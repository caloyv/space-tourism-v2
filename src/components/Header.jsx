/* eslint-disable react/prop-types */
import logo from "../assets/shared/logo.svg";
import hamburger from "../assets/shared/icon-hamburger.svg";
import close from "../assets/shared/icon-close.svg";

import { NavLink } from "react-router-dom";

const Header = ({ isOpen, setIsOpen, handleClick }) => {
  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <header className="absolute z-20 flex w-full items-center justify-between after:relative  after:z-30 after:order-1 after:mr-[-50px] after:hidden after:h-[3px] after:w-[50%] after:bg-white/[.25] after:content-[''] xl:pt-10 after:xl:block">
      <div className="m-6 h-[40px] min-h-[40px] w-[40px] min-w-[40px] md:my-4 md:ml-[2.40625rem] xl:ml-[3.4375rem] ">
        <img className="w-full" src={logo} alt="Space Tourism Logo" />
      </div>
      <div className="mx-6 my-4 md:ml-10 md:hidden">
        <img
          className="cursor-pointer "
          src={hamburger}
          alt="Menu Button"
          onClick={handleClick}
        />
      </div>

      {/* SLIDE NAV */}
      <div
        className={`fixed -right-[800px] top-0 h-full w-[65vw] bg-white/[.04] backdrop-blur-2xl duration-300 ease-in-out ${
          isOpen ? "active" : ""
        } md:hidden`}
        id="slide-menu"
      >
        <div className="w-full px-6 py-8 ">
          <img
            className="float-right h-5 w-5 cursor-pointer"
            src={close}
            alt="Close Button"
            onClick={handleClick}
          />
        </div>
        <div className="px-10 py-20">
          <ul className="flex flex-col gap-8 font-barlow-con font-normal tracking-[0.16875rem] text-white">
            <li>
              <NavLink to="/space-tourism-v2" onClick={closeNav} end>
                <span className="mr-4 font-extrabold">00</span>
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/space-tourism-v2/destination" onClick={closeNav}>
                <span className="mr-4 font-extrabold">01</span>
                DESTINATION
              </NavLink>
            </li>
            <li>
              <NavLink to="/space-tourism-v2/crew" onClick={closeNav}>
                <span className="mr-4 font-extrabold">02</span>
                CREW
              </NavLink>
            </li>
            <li>
              <NavLink to="/space-tourism-v2/technology" onClick={closeNav}>
                <span className="mr-4 font-extrabold">03</span>
                TECHNOLOGY
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      {/* DESKTOP NAV */}
      <div
        className="relative order-2 hidden h-[96px] w-[450px] bg-white/[.04] px-10 backdrop-blur-[81.55px] md:block xl:min-w-[830px]"
        id="line"
      >
        <ul className="flex h-full w-full  items-center justify-evenly gap-8 font-barlow-con text-sm font-normal tracking-[0.1475rem] text-white xl:justify-start xl:gap-16 xl:pl-20 xl:text-base xl:tracking-[0.16875rem]">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "before relative before:opacity-100"
                  : "before relative before:opacity-0"
              }
              to="/space-tourism-v2"
              end
            >
              <span className="mr-4 hidden font-extrabold xl:inline">00</span>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "before relative before:opacity-100"
                  : "before relative before:opacity-0"
              }
              to="/space-tourism-v2/destination"
            >
              <span className="mr-4 hidden font-extrabold xl:inline">01</span>
              DESTINATION
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "before relative before:opacity-100"
                  : "before relative before:opacity-0"
              }
              to="/space-tourism-v2/crew"
            >
              <span className="mr-4 hidden font-extrabold xl:inline">02</span>
              CREW
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "before relative before:opacity-100"
                  : "before relative before:opacity-0"
              }
              to="/space-tourism-v2/technology"
            >
              <span className="mr-4 hidden font-extrabold xl:inline">03 </span>
              TECHNOLOGY
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
