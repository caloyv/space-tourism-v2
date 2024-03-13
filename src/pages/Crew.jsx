import bgMobile from "../assets/crew/background-crew-mobile.jpg";
import bgTablet from "../assets/crew/background-crew-tablet.jpg";
import bgDesktop from "../assets/crew/background-crew-desktop.jpg";
import BackgroundImg from "../components/BackgroundImg";
import { useOutletContext } from "react-router-dom";
import PageHeading from "../components/PageHeading";

import CrewNav from "../components/CrewNav";

const Crews = () => {
  const srcArr = [bgMobile, bgTablet, bgDesktop];
  const [isOpen, handleClick, emptyFunc, isLoaded, screen, loaded] =
    useOutletContext();

  return (
    <main
      className="h-full w-full"
      id="crew-page"
      onClick={isOpen ? handleClick : emptyFunc}
    >
      <BackgroundImg
        srcArr={srcArr}
        isHFull={screen >= 1024 ? true : false}
        isLoaded={isLoaded}
        screen={screen}
        loaded={loaded}
      />

      <div className="absolute inset-0 top-[88px] z-10 w-full  px-6 md:px-[2.40625rem] xl:top-[136px] xl:px-0">
        <div className="flex flex-col items-center text-center font-barlow-con tracking-[0.171875rem] text-white md:h-full ">
          {/* <PageHeading num="02" text="MEET YOUR CREW" /> */}
          <CrewNav />
        </div>
        {/* IMAGE NAV */}
      </div>
    </main>
  );
};

export default Crews;
