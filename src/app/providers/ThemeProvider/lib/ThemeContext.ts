import { createContext } from "react";

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

export interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const defaultContext: ThemeContextProps = {
  theme: Theme.LIGHT,
  setTheme: () => {},
};

export const ThemeContext = createContext<ThemeContextProps>(defaultContext);

export const LOCAL_STORAGE_THEME_KEY = "theme";
