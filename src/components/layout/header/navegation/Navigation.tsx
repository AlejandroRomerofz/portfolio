import { useLocation, useNavigate } from "react-router-dom";
import { NavigationItem } from "../Header";

type NavigationProps = {
  navigationItems: NavigationItem[];
};

export default function Navigation({ navigationItems }: NavigationProps) {
  const navigation = useLocation();
  const navigate = useNavigate();

  const handleNavigationElementClick = (route: string) => {
    if (route == navigation.pathname) return;
    console.log(navigation.pathname);
    navigate(route);
  };

  return (
    <div className="hidden sm:block">
      <div className="flex items-center gap-4">
        {navigationItems.map((navigationItem, index) => (
          <p
            key={index}
            onClick={() => {
              handleNavigationElementClick(navigationItem.route);
            }}
            className={`text-sm capitalize ${
              navigationItem.route == navigation.pathname
                ? "text-textColorPrimary underline"
                : "text-textColorSecondary"
            }`}
          >
            {navigationItem.title}
          </p>
        ))}
      </div>
    </div>
  );
}