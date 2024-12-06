import { Route, Routes, BrowserRouter } from "react-router-dom";
import React, { Suspense, useState } from "react";
import LazyFallback from "./components/shared/lazy-fallback/LazyFallback";
import Header from "./components/layout/header/Header";
import { DarkModeContext } from "./contexts/DarkModeContext";

const Home = React.lazy(() => import("./components/pages/home/Home"));
const NotFound = React.lazy(
  () => import("./components/pages/not-found/NotFound")
);

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <div className={`app  ${darkMode ? "dark" : ""}`}>
        <BrowserRouter>
          <div className="fixed top-0 left-0 w-screen h-screen hidden bg-bgPrimary dark:bg-darkBgPrimary -z-10"></div>
          <Header></Header>
          <Suspense fallback={<LazyFallback></LazyFallback>}>
            <Routes>
              <Route path="/" Component={Home}></Route>
              <Route path="*" Component={NotFound}></Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </div>
    </DarkModeContext.Provider>
  );
}
