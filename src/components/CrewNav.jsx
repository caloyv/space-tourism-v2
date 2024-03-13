import { NavLink, useNavigate, useParams } from "react-router-dom";
import { crewData } from "../context";
import { useEffect, useState } from "react";
import PageHeading from "./PageHeading";

const CrewNav = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(crewData[0]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!id || !data) {
      navigate("/space-tourism-v2/crew/1");
    } else {
      setData((prevState) => crewData.find((data) => data.id === id));
    }
  }, [id, navigate]);

  const loaded = () => {
    setIsLoaded(true);
  };

  const unLoad = () => {
    setIsLoaded(false);
  };

  console.log(isLoaded)

  return (
    <div className="flex w-full flex-col items-center justify-center md:h-full md:justify-between xl:flex-row  xl:pl-[10.40625rem]">
      <div className="h-[223px] w-[327px] md:order-2 md:h-full md:max-h-[532px] md:w-full md:max-w-[1000] md:flex-1 xl:flex xl:max-h-[712px] xl:flex-initial xl:self-end ">
        <img
          className={`h-full w-full object-contain  ${isLoaded ? "fade-in" : ""} `}
          src={data.img}
          alt={`${data.name.toLowerCase()} image`}
          onLoad={loaded}
        />
        <div className="h-[1px] w-full bg-white/10 md:hidden" />
      </div>
      {/* NAVIGATION */}

      <div className="w-full md:order-1 md:flex md:flex-col md:items-center xl:h-full xl:items-start xl:gap-[137px] xl:py-[40px]">
        <ul className="my-8 flex w-full justify-center gap-4 md:order-2 xl:justify-start">
          <li className="relative z-10 h-2.5 w-2.5 xl:h-[15px] xl:w-[15px]">
            <NavLink
              to="1"
              onClick={unLoad}
              className={({ isActive }) =>
                isActive
                  ? "absolute inset-0 z-20 h-2.5  w-2.5 cursor-pointer rounded-full bg-white transition ease-in hover:bg-white xl:h-[15px] xl:w-[15px]"
                  : "absolute inset-0 z-20 h-2.5 w-2.5 cursor-pointer rounded-full bg-white/10 transition ease-in hover:bg-white xl:h-[15px] xl:w-[15px]"
              }
            ></NavLink>
          </li>
          <li className="relative z-10 h-2.5 w-2.5 xl:h-[15px] xl:w-[15px]">
            <NavLink
              to="2"
              onClick={unLoad}
              className={({ isActive }) =>
                isActive
                  ? "absolute inset-0 z-20 h-2.5 w-2.5 cursor-pointer rounded-full bg-white transition ease-in hover:bg-white xl:h-[15px] xl:w-[15px]"
                  : "absolute inset-0 z-20 h-2.5 w-2.5 cursor-pointer rounded-full bg-white/10 transition ease-in hover:bg-white xl:h-[15px] xl:w-[15px]"
              }
            ></NavLink>
          </li>
          <li className="relative z-10 h-2.5 w-2.5 xl:h-[15px] xl:w-[15px]">
            <NavLink
              to="3"
              onClick={unLoad}
              className={({ isActive }) =>
                isActive
                  ? "absolute inset-0 z-20 h-2.5  w-2.5 cursor-pointer rounded-full bg-white transition ease-in hover:bg-white xl:h-[15px] xl:w-[15px]"
                  : "absolute inset-0 z-20 h-2.5 w-2.5 cursor-pointer rounded-full bg-white/10 transition ease-in hover:bg-white xl:h-[15px] xl:w-[15px]"
              }
            ></NavLink>
          </li>
          <li className="relative z-10 h-2.5 w-2.5 xl:h-[15px] xl:w-[15px]">
            <NavLink
              to="4"
              onClick={unLoad}
              className={({ isActive }) =>
                isActive
                  ? "absolute inset-0 z-20 h-2.5 w-2.5 cursor-pointer rounded-full bg-white transition ease-in hover:bg-white xl:h-[15px] xl:w-[15px]"
                  : "absolute inset-0 z-20 h-2.5 w-2.5 cursor-pointer rounded-full bg-white/10 transition ease-in hover:bg-white xl:h-[15px] xl:w-[15px]"
              }
            ></NavLink>
          </li>
        </ul>
        {/* DESCRIPTION */}
        <PageHeading
          num="02"
          text="MEET YOUR CREW"
          className="xl:!mt-0 xl:!pl-0"
        />
        <div className="flex w-full flex-col justify-center justify-self-center tracking-normal md:order-1   xl:max-w-max xl:items-start xl:justify-between xl:gap-[32px]">
          <div className="flex w-full flex-col items-center gap-3 xl:items-start xl:gap-[32px] xl:text-left md:min-h-[200px] xl:min-h-[268px]">
            <p className="font-belle text-white/50 md:text-2xl xl:text-[2rem]">
              {data.position}
            </p>
            <p className="w-full font-belle text-2xl md:text-[2.5rem] xl:text-[3.5rem]">
              {data.name}
            </p>
            <p className="max-w-[458px] font-barlow text-[0.9375rem] leading-[25px] text-light-blue md:text-base md:leading-[28px] xl:max-w-[444px] xl:text-left xl:text-lg ">
              {data.desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrewNav;
