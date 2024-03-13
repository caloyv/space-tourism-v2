import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useEffect, useState } from "react";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
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

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const emptyFunc = () => {};

  return (
    <>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} handleClick={handleClick} />
      <Outlet
        context={[isOpen, handleClick, emptyFunc, isLoaded, screen, loaded]}
      />
    </>
  );
};

export default Layout;
