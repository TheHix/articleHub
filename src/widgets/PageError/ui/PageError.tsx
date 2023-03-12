import { useTranslation } from "react-i18next";

import { Button } from "@/shared/ui/Button/Button";

import styles from "./PageError.module.scss";

export const PageError = () => {
  const { t } = useTranslation();

  const refresh = () => {
    window.location.reload();
  };

  return (
    <div className={styles.pageError}>
      <h1 className={styles.title}>{t("Unexpected error")}!</h1>
      <Button className={styles.button} onClick={refresh}>
        {t("Refresh")}
      </Button>
    </div>
  );
};
