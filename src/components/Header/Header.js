import React from "react";
import { MdNightsStay, MdWbSunny } from "react-icons/md";
import { useScrollPosition } from "../../Hooks/useScrollPosition";
const Header = () => {
  const darkMode=true;
  const scrollPos=useScrollPosition();
  return (
    <header className={`navbar h-16  sticky top-0 z-50 transition-shadow  ${
      scrollPos > 0
        ? "shadow bg-opacity-50 backdrop-blur-lg backdrop-filter rounded-lg"
        : "shadow-none"
    }`}>
      <nav className="flex justify-between items-center p-5 w-full">
      <div>
      <h2 className="">WELCOME</h2>
      </div>

        <div className="" >
          { darkMode ? (
            <MdNightsStay className="text-2xl cursor-pointer"/>
          ) : (
            <MdWbSunny className="text-2xl cursor-pointer"/>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
