import { FC } from "react";
import { classNames } from "@/shared/lib/ClassNames/ClassNames";
import styles from "./AppLink.module.scss";
import { Link, LinkProps } from "react-router-dom";

export enum AppLinkTheme {
	DEFAULT = "default",
	INVERTED = "inverted",
}

interface AppLinkProps extends LinkProps {
	className?: string;
	theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = ({
	className,
	to,
	theme = AppLinkTheme.DEFAULT,
	children,
}) => {
	return (
		<Link
			to={to}
			className={classNames(styles.appLink, [className, styles[theme]])}
		>
			{children}
		</Link>
	);
};
