import bgMobile from "../assets/technology/background-technology-mobile.jpg";
import bgTablet from "../assets/technology/background-technology-tablet.jpg";
import bgDesktop from "../assets/technology/background-technology-desktop.jpg";
import BackgroundImg from "../components/BackgroundImg";
import { useOutletContext } from "react-router-dom";
import PageHeading from "../components/PageHeading";
import TechnologyNav from "../components/TechnologyNav";

const Technology = () => {
  const srcArr = [bgMobile, bgTablet, bgDesktop];
  const [isOpen, handleClick, emptyFunc, isLoaded, screen, loaded] =
    useOutletContext();

  return (
    <main
      className="h-full w-full"
      id="technology-page"
      onClick={isOpen ? handleClick : emptyFunc}
    >
      <BackgroundImg
        isHFull
        srcArr={srcArr}
        isLoaded={isLoaded}
        screen={screen}
        loaded={loaded}
      />
      <div className="absolute inset-0 top-[88px] z-10 w-full xl:top-[136px] xl:px-0 ">
        <div className="flex flex-col xl:w-full xl:h-full items-center text-center font-barlow-con tracking-[0.171875rem] text-white ">
          <PageHeading num="03 " text="SPACE LAUNCH 101" className="md:pl-[38.5px]" />
          <TechnologyNav screen={screen} />
        </div>
      </div>
    </main>
  );
};

export default Technology;
