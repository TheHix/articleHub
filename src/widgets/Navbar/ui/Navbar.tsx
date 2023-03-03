import { FC } from "react";
import { classNames } from "@/shared/lib/ClassNames/ClassNames";
import styles from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "@/shared/ui/AppLink/AppLink";

interface NavbarProps {
	className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
	return (
		<nav className={classNames(styles.navbar, [className])}>

			<ul className={styles.links}>
				<li>
					<AppLink to="/" theme={AppLinkTheme.INVERTED}>
						main
					</AppLink>
				</li>
				<li>
					<AppLink to="/about" theme={AppLinkTheme.INVERTED}>
						about
					</AppLink>
				</li>
			</ul>
		</nav>
	);
};