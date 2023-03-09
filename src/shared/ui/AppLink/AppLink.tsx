import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";

import { classNames } from "@/shared/lib/ClassNames/classNames";

import styles from "./AppLink.module.scss";

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
