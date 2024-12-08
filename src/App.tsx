import { Route, Routes, BrowserRouter } from "react-router-dom";
import React, { Suspense, useEffect, useState } from "react";
import LazyFallback from "./components/shared/lazy-fallback/LazyFallback";
import Header from "./components/layout/header/Header";
import { DarkModeContext } from "./contexts/DarkModeContext";
import { LangContext } from "./contexts/LangContext";

const Home = React.lazy(() => import("./components/pages/home/Home"));
const Projects = React.lazy(
  () => import("./components/pages/projects/Projects")
);

const NotFound = React.lazy(
  () => import("./components/pages/not-found/NotFound")
);

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [lang, setLang] = useState<string>(
    localStorage.getItem("lang") ?? navigator.language
  );
  const [langData, setLangData] = useState<{
    [key: string]: string;
  }>();

  const getLangData = () => {
    fetch("/resources/lang/" + lang + ".json")
      .then((data) => data.json())
      .then((dataJson) => {
        setLangData(dataJson);
      });
  };

  useEffect(() => {
    getLangData();
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, langData }}>
      <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
        {langData ? (
          <div className={`app  ${darkMode ? "dark" : ""}`}>
            <BrowserRouter>
              <div className="fixed top-0 left-0 w-screen h-screen hidden bg-bgPrimary dark:bg-darkBgPrimary -z-10"></div>
              <Header></Header>
              <Suspense fallback={<LazyFallback></LazyFallback>}>
                <Routes>
                  <Route path="/" Component={Home}></Route>
                  <Route path="/projects" Component={Projects}></Route>
                  <Route path="*" Component={NotFound}></Route>
                </Routes>
              </Suspense>
            </BrowserRouter>
          </div>
        ) : (
          <LazyFallback></LazyFallback>
        )}
      </DarkModeContext.Provider>
    </LangContext.Provider>
  );
}
