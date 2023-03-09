import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { routeConfig } from "@/shared/config/routerConfig/routerConfig";
import { PageLoader } from "@/widgets/PageLoader";

const AppRouter = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {routeConfig.map(({ element, path }) => {
          return (
            <Route
              key={path}
              path={path}
              element={<div className="page-wrapper">{element}</div>}
            />
          );
        })}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
