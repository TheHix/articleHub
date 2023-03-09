import { FC } from "react";

import { Theme, useTheme } from "@/app/providers/ThemeProvider";
import DarkTheme from "@/shared/assets/icons/dark-theme.svg";
import LightTheme from "@/shared/assets/icons/light-theme.svg";
import { classNames } from "@/shared/lib/ClassNames/classNames";
import { Button } from "@/shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme} className={classNames("", [className])}>
      {theme === Theme.LIGHT ? <LightTheme /> : <DarkTheme />}
    </Button>
  );
};
