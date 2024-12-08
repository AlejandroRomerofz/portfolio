import { useState } from "react";
import MobileMenu from "./mobile-menu/MobileMenu";
import Navigation from "./navegation/Navigation";
import { HiBars4 } from "react-icons/hi2";
import { BiMoon } from "react-icons/bi";
import useDarkMode from "../../../hooks/useDarkMode";
import { MdOutlineWbSunny } from "react-icons/md";
import useLang from "../../../hooks/useLang";
import LangSelector from "../../shared/lang-selector/LangSelector";

export type NavigationItem = {
  title: string;
  route: string;
};

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const { darkMode, toggleDarkMode } = useDarkMode();
  const { l } = useLang();

  const navigationItems: NavigationItem[] = [
    { title: l("NAVEGATIONOPTION_HOME"), route: "/" },
    { title: l("NAVEGATIONOPTION_PROJECTS"), route: "/projects" },
  ];

  const handleOpenMenuClick = () => {
    setOpenMenu(true);
  };

  return (
    <div className="h-[var(--header-height)] z-10 fixed top-0 left-0 w-full pt-2">
      <div className="flex justify-between px-4 h-full items-center font-normal">
        <div onClick={handleOpenMenuClick} className="text-2xl sm:hidden w-6">
          <HiBars4></HiBars4>
        </div>
        <Navigation navigationItems={navigationItems}></Navigation>
        <div className="w-6 sm:w-fit text-2xl flex items-center gap-5">
          <div className="sm:block hidden text-sm">
            <LangSelector></LangSelector>
          </div>

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
