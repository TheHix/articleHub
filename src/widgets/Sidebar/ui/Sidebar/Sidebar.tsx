import { FC, useState } from "react";
import { classNames } from "@/shared/lib/ClassNames/ClassNames";
import styles from "./Sidebar.module.scss";
import { ThemeSwitcher } from "@/widgets/ThemeSwitcher/ui/ThemeSwitcher";
import { LanguageSwitcher } from "@/widgets/LanguageSwitcher/LanguageSwitcher";

interface SidebarProps {
	className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
	const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

	const onToggle = () => {
		setIsCollapsed((prev) => !prev);
	};

	return (
		<div
			className={classNames(styles.sidebar, [className], {
				[styles.collapsed]: isCollapsed,
			})}
		>
			<button onClick={onToggle}>toggle</button>
			<div className={styles.switchers}>
				<ThemeSwitcher />
				<LanguageSwitcher />
			</div>
		</div>
	);
};
