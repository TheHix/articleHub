import { FC } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "@/shared/lib/ClassNames/ClassNames";
import { AppLink, AppLinkTheme } from "@/shared/ui/AppLink/AppLink";

import styles from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <nav className={classNames(styles.navbar, [className])}>
      <ul className={styles.links}>
        <li>
          <AppLink to="/" theme={AppLinkTheme.INVERTED}>
            {t("главная страница")}
          </AppLink>
        </li>
        <li>
          <AppLink to="/about" theme={AppLinkTheme.INVERTED}>
            {t("о сайте")}
          </AppLink>
        </li>
      </ul>
    </nav>
  );
};
