import React from "react";
import styles from "./selectedcard.module.scss";
import { useCursor } from "../../context";
import { useMediaQuery } from "../../hooks";
import { useLang } from "../../i18n";

interface SelectedCardProps {
  className?: string;
  videoSrc?: string;
  imageSrc?: string;
  imageAlt?: string;
  projectTitle: string;
  projectType?: string;
  projectNumber: string;
  description: string;
  projectTypeTablet?: string;
}

export const SelectedCard: React.FC<SelectedCardProps> = ({
  className,
  videoSrc,
  imageSrc,
  imageAlt,
  projectTitle,
  projectType,
  projectNumber,
  description,
}) => {
  const { t } = useLang();
  const isTablet = useMediaQuery("(max-width: 900px)");
  const isMobile = useMediaQuery("(max-width: 650px)");

  const { handleSelectedHoverCard, handleHoverEnd } = useCursor();

  return (
    <div
      className={`${styles.selected__card} ${className}`}
      onMouseEnter={handleSelectedHoverCard}
      onMouseLeave={handleHoverEnd}
      onClick={handleHoverEnd}
    >
      {videoSrc ? (
        <video
          id="video"
          className={styles.selected__video}
          src={videoSrc}
          autoPlay
          muted
          playsInline
          loop
        ></video>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className={styles.selected__video}
          src={imageSrc}
          alt={imageAlt ?? projectTitle}
        />
      )}

      <div className={styles.selected__card__info}>
        <div className={styles.selected__project__title}>{projectTitle}</div>
        <div className={styles.selected__project__desc}>{description}</div>
        <div className={styles.view__more__btn}>{t.viewMore}</div>
      </div>
      {!isTablet || isMobile ? (
        <div className={styles.selected__number__container}>
          <span className={styles.selected__number}>{projectNumber}</span>
          <div className={styles.selected__type}>{projectType}</div>
        </div>
      ) : null}
    </div>
  );
};
