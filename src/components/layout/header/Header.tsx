import { useState } from "react";
import MobileMenu from "./mobile-menu/MobileMenu";
import Navigation from "./navegation/Navigation";
import { HiBars4 } from "react-icons/hi2";
import { BiMoon } from "react-icons/bi";
import useDarkMode from "../../../hooks/useDarkMode";
import { MdOutlineWbSunny } from "react-icons/md";

export type NavigationItem = {
  title: string;
  route: string;
};

const navigationItems: NavigationItem[] = [
  { title: "home", route: "/" },
  { title: "projects", route: "/projects" },
  { title: "about", route: "/about" },
];

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const { darkMode, toggleDarkMode } = useDarkMode();

  const handleOpenMenuClick = () => {
    setOpenMenu(true);
  };

  return (
    <div className="h-[var(--header-height)] z-10 fixed top-0 left-0 w-full">
      <div className="flex justify-between px-4 h-full items-center font-normal">
        <div onClick={handleOpenMenuClick} className="text-2xl sm:hidden w-6">
          <HiBars4></HiBars4>
        </div>
        <Navigation navigationItems={navigationItems}></Navigation>
        <div className="w-6 text-2xl">
          {darkMode ? (
            <MdOutlineWbSunny onClick={toggleDarkMode}></MdOutlineWbSunny>
          ) : (
            <BiMoon onClick={toggleDarkMode}></BiMoon>
          )}
        </div>
      </div>
      <MobileMenu
        navigationItems={navigationItems}
        open={openMenu}
        setOpen={setOpenMenu}
      ></MobileMenu>
    </div>
  );
}

<h1 className="text-lg">Alejandro Romero</h1>;
