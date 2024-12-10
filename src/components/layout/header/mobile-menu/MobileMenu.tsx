import { useLocation, useNavigate } from "react-router-dom";
import { NavigationItem as NavigationItem } from "../Header";
import { IoMdClose } from "react-icons/io";
import LangSelector from "../../../shared/lang-selector/LangSelector";
import LinkedinGithub from "../../../shared/linkedin-github/LinkedinGithub";

type MobileMenuProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  navigationItems: NavigationItem[];
};

export default function MobileMenu({
  open,
  setOpen,
  navigationItems,
}: MobileMenuProps) {
  const navigation = useLocation();
  const navigate = useNavigate();

  const handleNavigationElementClick = (route: string) => {
    if (route == navigation.pathname) return;
    navigate(route);
    setOpen(false);
  };

  return (
    <div
      className={`sm:hidden fixed top-0 w-screen h-screen bg-bgPrimary dark:bg-darkBgPrimary z-40 bg-opacity-80 dark:bg-opacity-95 backdrop-blur-sm transition-all duration-100 ${
        open ? "right-0" : "right-full"
      }`}
    >
      <div className="flex flex-col h-full justify-center gap-9 px-10">
        {navigationItems.map((navigationItem, index) => (
          <p
            key={index}
            onClick={() => {
              handleNavigationElementClick(navigationItem.route);
            }}
            className={`text-2xl capitalize ${
              navigationItem.route == navigation.pathname
                ? "text-textColorPrimary underline"
                : "text-textColorSecondary"
            }`}
          >
            {navigationItem.title}
          </p>
        ))}
        <LinkedinGithub></LinkedinGithub>
      </div>
      <div className="absolute top-0 left-0 p-10 w-full flex justify-between items-center">
        <div className="text-md">
          <LangSelector></LangSelector>
        </div>
        <p className="text-4xl">
          <IoMdClose
            onClick={() => {
              setOpen(false);
            }}
          ></IoMdClose>
        </p>
      </div>
    </div>
  );
}
