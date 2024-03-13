import bgMobile from "../assets/destination/background-destination-mobile.jpg";
import bgTablet from "../assets/destination/background-destination-tablet.jpg";
import bgDesktop from "../assets/destination/background-destination-desktop.jpg";
import BackgroundImg from "../components/BackgroundImg";

import { useOutletContext } from "react-router-dom";
import PageHeading from "../components/PageHeading";
import DestinationNav from "../components/DestinationNav";

const Destination = () => {
  const srcArr = [bgMobile, bgTablet, bgDesktop];
  const [isOpen, handleClick, emptyFunc] = useOutletContext();

  return (
    <main
      className="h-full w-full"
      id="destination-page"
      onClick={isOpen ? handleClick : emptyFunc}
    >
      <BackgroundImg srcArr={srcArr} className="xl:h-full" />

      {/* CONTENT */}
      <div className="absolute inset-0 top-[88px] z-10 w-full px-6 md:px-[2.40625rem] xl:top-[136px] xl:px-0">
        <div className="flex flex-col items-center text-center font-barlow-con tracking-[0.171875rem] text-white ">
          <PageHeading num="01" text="PICK YOUR DESTINATION" />
          <DestinationNav />
        </div>
        {/* IMAGE NAV */}
      </div>
    </main>
  );
};

export default Destination;
