import { useLocation, useNavigate } from "react-router-dom";
import { NavigationItem as NavigationItem } from "../Header";
import { IoMdClose } from "react-icons/io";

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
      className={`sm:hidden fixed top-0 w-screen h-screen bg-bgPrimary dark:bg-darkBgPrimary z-20 bg-opacity-80 dark:bg-opacity-95 backdrop-blur-sm transition-all duration-100 ${
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
      </div>
      <div className="absolute top-0 right-0">
        <p className="text-4xl p-10">
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
