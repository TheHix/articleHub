import React, { Suspense, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Counter from "./couner/Counter";
import { buildClassNames } from "./helpers/classNames/classNames";

import { AboutPageAsync } from "./pages/aboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/mainPage/MainPage.async";

import "./styles/index.scss";
import { useTheme } from "./theme/useTheme";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={buildClassNames("app", [theme], {})}>
      <button onClick={toggleTheme}>тема</button>
      <Link to="/">main</Link>
      <Link to="/about">about</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPageAsync />} />
          <Route path="/about" element={<AboutPageAsync />} />
        </Routes>
      </Suspense>

      <Counter />
    </div>
  );
};

export default App;
