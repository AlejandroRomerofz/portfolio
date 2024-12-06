import { useContext } from "react";
import { DarkModeContext } from "../contexts/DarkModeContext";

export default function useDarkMode() {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  const toggleDarkMode = () => {
    if (darkMode) return setDarkMode(false);
    setDarkMode(true);
  };

  return { darkMode, setDarkMode, toggleDarkMode };
}
