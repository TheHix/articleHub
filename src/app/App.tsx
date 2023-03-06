import React, { Suspense } from "react";

import { classNames } from "@/shared/lib/ClassNames/ClassNames";
import { Navbar } from "@/widgets/Navbar";
import { Sidebar } from "@/widgets/Sidebar";

import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import "./styles/index.scss";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", [theme], {})}>
      <Navbar />
      <Suspense fallback="">
        <div className="content">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
