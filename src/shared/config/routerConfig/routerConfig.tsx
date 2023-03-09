import { RouteProps } from "react-router-dom";

import { AboutPage } from "@/pages/AboutPage";
import { MainPage } from "@/pages/MainPage";
import { NotFoundPage } from "@/pages/NotFoundPage";

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  NOT_FOUND = "not_found",
}

const routePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Readonly<RouteProps[]> = [
  {
    path: routePath.main,
    element: <MainPage />,
  },
  { path: routePath.about, element: <AboutPage /> },
  { path: routePath.not_found, element: <NotFoundPage /> },
];
