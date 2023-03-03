import { FC } from "react";
import { classNames } from "@/shared/lib/ClassNames/ClassNames";
import styles from "./ThemeSwitcher.module.scss";
import LightTheme from "@/shared/assets/icons/light-theme.svg";
import DarkTheme from "@/shared/assets/icons/dark-theme.svg";
import { Theme, useTheme } from "@/app/providers/ThemeProvider";
import { Button } from "@/shared/ui/Button/Button";

interface ThemeSwitcherProps {
	className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
	const { theme, toggleTheme } = useTheme();

	return (
		<Button
			onClick={toggleTheme}
			className={classNames(styles.themeSwitcher, [className])}
		>
			{theme === Theme.LIGHT ? <LightTheme /> : <DarkTheme />}
		</Button>
	);
};
