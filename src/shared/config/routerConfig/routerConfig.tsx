import { RouteProps } from "react-router-dom";

import { AboutPage } from "@/pages/AboutPage";
import { MainPage } from "@/pages/MainPage";

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
}

const routePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
};

export const routeConfig: Readonly<RouteProps[]> = [
  {
    path: routePath.main,
    element: <MainPage />,
  },
  { path: routePath.about, element: <AboutPage /> },
];
