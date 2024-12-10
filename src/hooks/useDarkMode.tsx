import { useContext } from "react";
import { DarkModeContext } from "../contexts/DarkModeContext";

export default function useDarkMode() {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  const toggleDarkMode = () => {
    if (darkMode) {
      localStorage.setItem("darktheme", "false");
      return setDarkMode(false);
    }
    localStorage.setItem("darktheme", "true");
    setDarkMode(true);
  };

  return { darkMode, setDarkMode, toggleDarkMode };
}
