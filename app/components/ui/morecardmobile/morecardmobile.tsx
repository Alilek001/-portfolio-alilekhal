import styles from "./morecardmobile.module.scss";
import React from "react";
import { useLang } from "../../i18n";

interface MoreCardMobileProps {
  imageSrc: string;
  imageAlt: string;
  cardNumber: string;
  projectTitle: string;
  description: string;
  projectType: string;
}

export const MoreCardMobile: React.FC<MoreCardMobileProps> = ({
  imageSrc,
  imageAlt,
  cardNumber,
  projectTitle,
  description,
  projectType,
}) => {
  const { t } = useLang();
  return (
    <div className={styles.mobile__card}>
      <img src={imageSrc} alt={imageAlt} className={styles.mobile__card__img} />
      <div className={styles.mobile__card__info}>
        <div className={styles.mobile__card__number}>{cardNumber}</div>
        <div className={styles.mobile__card__type}>{projectType}</div>
      </div>
      <div className={styles.mobile__card__title}>{projectTitle}</div>

      <div className={styles.mobile__card__desc}>{description}</div>
      <div className={styles.view__more__btn}>{t.viewMore}</div>
      <div className={styles.mobile__card__border}></div>
    </div>
  );
};
