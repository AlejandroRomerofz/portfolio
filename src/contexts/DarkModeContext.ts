import React from "react";

type darkModeValue = {
  darkMode: boolean;
  setDarkMode: (set: boolean) => void;
};

export const DarkModeContext = React.createContext<darkModeValue>({
  darkMode: false,
  setDarkMode: () => {},
});
