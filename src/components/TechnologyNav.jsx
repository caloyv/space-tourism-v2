import { useEffect, useState } from "react";
import { technologyData } from "../context";
import { NavLink, useNavigate, useParams } from "react-router-dom";

const TechnologyNav = ({ screen }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(technologyData[0]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [img, setImg] = useState(technologyData[0].imgLandscape);

  useEffect(() => {
    if (!id || !data) {
      navigate("/space-tourism-v2/technology/1");
    } else {
      setData((prevState) => technologyData.find((data) => data.id === id));
    }
  }, [id, navigate, screen]);

  const loaded = () => {
    setIsLoaded(true);
  };

  const unLoad = () => {
    setIsLoaded(false);
  };
// xl:pl-[166.5px]
  return (
    <div className="xl:flex xl:h-full xl:w-full xl:max-w-[1920px] xl:items-center xl:justify-evenly xl:gap-[130px]   xl:overflow-hidden">
      <div className="h-full order-2">
        <div className=" max-w-[850px] xl:h-full xl:max-h-[600px] xl:w-full">
          <img
            className={` h-full w-full object-contain ${isLoaded ? "fade-in" : ""}`}
            src={screen >= 1280 ? data.imgPortrait : data.imgLandscape}
            alt={`${data.name} image`}
            onLoad={loaded}
          />
        </div>
      </div>
      <div className="order-1 xl:flex xl:w-full xl:max-w-[560px] xl:items-center xl:gap-[80px] ">
        <ul className="my-[30px] flex justify-center gap-4 md:my-[56px] xl:h-full xl:flex-col  xl:gap-[32px]">
          <li className="group flex h-[40px] w-[40px] items-center justify-center rounded-full border border-white/[.25] hover:bg-white hover:text-dark-blue md:h-[60px] md:w-[60px] md:text-2xl xl:h-[80px] xl:w-[80px]">
            <NavLink
              onClick={unLoad}
              to="1"
              className={({ isActive }) =>
                isActive
                  ? "flex h-full w-full items-center justify-center rounded-full bg-white py-2 pl-1 font-belle text-dark-blue transition duration-300 hover:bg-white hover:text-dark-blue"
                  : "flex h-full w-full items-center justify-center rounded-full py-2 pl-1 font-belle text-white transition duration-300 hover:bg-white hover:text-dark-blue"
              }
            >
              1
            </NavLink>
          </li>
          <li className="group flex h-[40px] w-[40px] items-center justify-center rounded-full border border-white/[.25] hover:bg-white hover:text-dark-blue md:h-[60px] md:w-[60px] md:text-2xl xl:h-[80px] xl:w-[80px]">
            <NavLink
              onClick={unLoad}
              to="2"
              className={({ isActive }) =>
                isActive
                  ? "flex h-full w-full items-center justify-center rounded-full bg-white py-2 pl-1 font-belle text-dark-blue transition duration-300 hover:bg-white hover:text-dark-blue"
                  : "flex h-full w-full items-center justify-center rounded-full py-2 pl-1 font-belle text-white transition duration-300 hover:bg-white hover:text-dark-blue"
              }
            >
              2
            </NavLink>
          </li>
          <li className="group flex h-[40px] w-[40px] items-center justify-center rounded-full border border-white/[.25] hover:bg-white hover:text-dark-blue md:h-[60px] md:w-[60px] md:text-2xl xl:h-[80px] xl:w-[80px]">
            <NavLink
              onClick={unLoad}
              to="3"
              className={({ isActive }) =>
                isActive
                  ? "flex h-full w-full items-center justify-center rounded-full bg-white py-2 pl-1 font-belle text-dark-blue transition duration-300 hover:bg-white hover:text-dark-blue"
                  : "flex h-full w-full items-center justify-center rounded-full py-2 pl-1 font-belle text-white transition duration-300 hover:bg-white hover:text-dark-blue"
              }
            >
              3
            </NavLink>
          </li>
        </ul>
        <div className="flex flex-col items-center gap-[13px] md:gap-[16px] xl:w-full xl:min-w-[470px] ">
          <div className="flex w-full justify-center xl:mb-[13px] xl:justify-start">
            <p className="text-sm tracking-[2.36px] text-light-blue md:text-base md:tracking-[2.7px]">
              THE TERMINOLOGY...
            </p>
          </div>
          <div className="flex w-full justify-center xl:justify-start">
            <p className="font-belle text-2xl tracking-normal md:text-[2.5rem] xl:text-[3.5rem]">
              {data.name}
            </p>
          </div>
          <div className="flex w-full justify-center px-[48px] xl:mt-[17px] xl:justify-start xl:px-0 xl:text-start">
            <p className="max-w-[500px] font-barlow text-[0.9375rem] font-normal leading-[25px] tracking-normal text-light-blue  md:max-w-[600px] md:text-base md:leading-[28px] xl:text-lg xl:leading-[32px] ">
              {data.desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyNav;
