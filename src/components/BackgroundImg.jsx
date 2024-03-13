import { useEffect, useState } from "react";

const BackgroundImg = ({ srcArr, isHFull, isBrightness, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [screen, setScreen] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreen(window.innerWidth);
    });
  }, [screen]);

  const loaded = () => {
    setIsLoaded(true);
  };

  return (
    <img
      src={screen >= 1280 ? srcArr[2] : screen >= 768 ? srcArr[1] : srcArr[0]}
      className={`w-full ${
        isHFull ? "h-full" : ""
      } absolute inset-0 object-cover object-center opacity-0 transition-opacity duration-500 ease-in-out ${
        isBrightness ? "brightness-75" : ""
      }  ${isLoaded ? "loaded" : ""} ${className ? className : ""}`}
      alt="Background Image"
      onLoad={loaded}
    />
  );
};

export default BackgroundImg;
