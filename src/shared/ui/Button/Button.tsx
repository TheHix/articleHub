import { ButtonHTMLAttributes, FC } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";

import styles from "./Button.module.scss";

export enum ThemeButton {
  CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: string;
}

export const Button: FC<ButtonProps> = ({
  className,
  children,
  theme = ThemeButton.CLEAR,
  ...otherProps
}) => {
  return (
    <button
      {...otherProps}
      className={classNames(styles.button, [className, theme])}
    >
      {children}
    </button>
  );
};
