import { FC } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "@/shared/lib/ClassNames/classNames";
import { Button } from "@/shared/ui/Button/Button";

import styles from "./LanguageSwitcher.module.scss";

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation();
  const toggle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button
      onClick={toggle}
      className={classNames(styles.languageSwitcher, [className])}
    >
      {t("язык")}
    </Button>
  );
};
