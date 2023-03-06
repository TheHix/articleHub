import React, { FC, useMemo, useState } from "react";

import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext,
} from "../lib/ThemeContext";

const initialTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) ?? Theme.LIGHT;

const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  const initialProps = useMemo(() => {
    return { theme, setTheme };
  }, [theme]);

  return (
    <ThemeContext.Provider value={initialProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
