import { NavLink, useNavigate, useParams } from "react-router-dom";

import { destinationData } from "../context";
import { useEffect, useState } from "react";

const DestinationNav = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(destinationData[0]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!id || !data) {
      navigate("/space-tourism-v2/destination/1");
    } else {
      setData((prevState) => destinationData.find((data) => data.id === id));
    }
  }, [id, navigate]);

  const loaded = () => {
    setIsLoaded(true);
  };

  const unLoad = () => {
    setIsLoaded(false)
  }

  return (
    <div className="flex flex-col items-center xl:flex-row xl:gap-[9.8125rem]">
      {/* <div className="w-screen h-screen" style={blurStyle}></div> */}
      <div
        className="mb-[1.625rem] h-[170px] w-[170px] md:h-[18.75rem] md:w-[18.75rem] xl:h-[445px] xl:w-[445px] rotate "
        id="test"
      >
        <img
          className={` duration-800 w-full opacity-0 transition ease-in-out ${
            isLoaded ? "opacity-100 fade-up " : ""
          } `}
          src={data.img}
          alt={`${data.name.toLowerCase()} image`}
          onLoad={loaded}
        />
      </div>
      <div className="xl:text-left">
        <ul
          className="mb-5 flex justify-center gap-[1.625rem] font-barlow-con text-sm tracking-[0.1475rem] text-white md:my-[2.6875rem] md:text-base md:tracking-[0.16875rem] xl:mt-0 xl:justify-start"
          id="destination-nav"
        >
          <li>
            <NavLink
              to="1"
              onClick={unLoad}
              className="relative cursor-pointer text-light-blue before:absolute before:-bottom-[10px] before:h-[3px]  before:w-full before:bg-white before:opacity-0 before:transition before:duration-300 before:ease-in-out before:content-[''] hover:before:opacity-100"
            >
              MOON
            </NavLink>
          </li>
          <li>
            <NavLink
              to="2"
              onClick={unLoad}
              className="relative cursor-pointer text-light-blue before:absolute before:-bottom-[10px] before:h-[3px]  before:w-full before:bg-white before:opacity-0 before:transition before:duration-300 before:ease-in-out before:content-[''] hover:before:opacity-100 "
            >
              MARS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="3"
              onClick={unLoad}
              className="relative cursor-pointer text-light-blue before:absolute before:-bottom-[10px] before:h-[3px]  before:w-full before:bg-white before:opacity-0 before:transition before:duration-300 before:ease-in-out before:content-[''] hover:before:opacity-100 "
            >
              EUROPA
            </NavLink>
          </li>
          <li>
            <NavLink
              to="4"
              onClick={unLoad}
              className="relative cursor-pointer text-light-blue before:absolute before:-bottom-[10px] before:h-[3px]  before:w-full before:bg-white before:opacity-0 before:transition before:duration-300 before:ease-in-out before:content-[''] hover:before:opacity-100 "
            >
              TITAN
            </NavLink>
          </li>
        </ul>
        <div className="font-belle">
          <p className="text-[3.5rem] md:text-[5rem] xl:text-[6.25rem]">
            {data.name}
          </p>
        </div>
        <div className="max-w-[28.125rem] font-barlow tracking-normal md:max-w-[35.8125rem]  xl:max-w-[444px] ">
          <p className="text-[0.9375rem] font-normal leading-[1.5625rem] text-light-blue md:text-base md:leading-[1.75rem] xl:text-lg xl:leading-8">
            {data.desc}
          </p>
        </div>
        <div className="my-8 h-[1px] w-full bg-white/10 md:mt-12" />
        <div className=" flex flex-col gap-8 md:flex-row md:justify-center md:gap-20 xl:justify-start">
          <div>
            <p className="mb-3 font-barlow-con text-sm tracking-[0.1475rem] text-light-blue">
              AVG. DISTANCE
            </p>
            <p className="font-belle text-[1.75rem]">{data.distance}</p>
          </div>
          <div>
            <p className="mb-3 font-barlow-con text-sm tracking-[0.1475rem] text-light-blue">
              EST. TRAVEL TIME
            </p>
            <p className="font-belle text-[1.75rem]">{data.travelTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationNav;
