/* eslint-disable react/prop-types */
import bgMobile from "../assets/home/background-home-mobile.jpg";
import bgTablet from "../assets/home/background-home-tablet.jpg";
import bgDesktop from "../assets/home/background-home-desktop.jpg";
import { NavLink, useOutletContext } from "react-router-dom";
import BackgroundImg from "../components/BackgroundImg";

const Homepage = () => {
  const [isOpen, handleClick, emptyFunc, isLoaded, screen, loaded] =
    useOutletContext();

  const bgSrc = [bgMobile, bgTablet, bgDesktop];

  return (
    <main
      className="h-screen w-screen"
      id="home-page"
      onClick={isOpen ? handleClick : emptyFunc}
    >
      {/* BACKGROUND IMAGE*/}
      <BackgroundImg
        srcArr={bgSrc}
        isHFull
        isBrightness
        isLoaded={isLoaded}
        screen={screen}
        loaded={loaded}
      />

      {/* CONTENT */}
      <div className="absolute inset-0 top-[72px] z-10 flex w-full flex-col items-center justify-center gap-24 px-6 md:min-h-[850px] md:gap-32 xl:-top-[112px] xl:mb-[8%] xl:flex-row xl:items-end xl:justify-evenly">
        <div className="text-center xl:text-left">
          <p className="font-barlow-con tracking-[0.21125rem] text-light-blue md:text-xl xl:text-[28px] xl:tracking-[0.295rem]">
            SO, YOU WANT TO TRAVEL TO
          </p>
          <p className="font-belle text-[5rem] text-white md:text-[150px]">
            SPACE
          </p>
          <p className="max-w-[450px] font-barlow text-[0.9375rem] leading-[1.5625rem] text-light-blue md:text-base md:leading-[1.75rem] xl:text-[1.125rem]  xl:leading-[2rem]">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        {/* EXPLORE BUTTON */}
        <div className="bounce flex md:justify-end">
          <NavLink
            className="z-5 relative inline-grid aspect-[1] h-[150px] max-h-[600px] w-[150px] place-items-center rounded-[50%] bg-white px-[1.5em]  font-belle text-xl tracking-[1.25px] text-dark-blue md:h-[242px] md:w-[242px] md:px-[1.5em] md:text-[2rem] "
            to="destination"
          >
            <span className="absolute z-[1] h-full w-full rounded-[50%] bg-[rgba(255,255,255,.1)] opacity-0 transition duration-500 hover:scale-150 hover:opacity-100"></span>
            EXPLORE
          </NavLink>
        </div>
      </div>
    </main>
  );
};
/*

*/
export default Homepage;
