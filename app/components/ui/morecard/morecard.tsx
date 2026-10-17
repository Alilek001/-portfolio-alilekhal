import styles from "./morecard.module.scss";
import Image from "next/image";
import React from "react";
import { useCursor } from "../../context";

interface MoreCardProps {
  imageSrc: string;
  imageAlt: string;
  cardNumber: string;
  projectTitle: string;
  description: string;
  projectType: string;
  setModal: (modalState: { active: boolean; index: number }) => void;
  index: number;
  isActive: boolean;
}

export const MoreCard: React.FC<MoreCardProps> = ({
  cardNumber,
  projectTitle,
  description,
  setModal,
  index,
  isActive,
}) => {
  const { handleHoverCard, handleHoverEnd } = useCursor();

  const handleMouseEnter = () => {
    setModal({ active: true, index: index });
    handleHoverCard();
  };

  return (
    <div
      className={styles.morecard__container}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleHoverEnd}
      onClick={handleHoverEnd}
    >
      <div className={styles.number__container}>
        <div
          className={
            isActive
              ? `${styles.card__number} ${styles.active}`
              : styles.card__number
          }
        >
          {cardNumber}
        </div>
      </div>

      <div className={styles.card__content}>
        <div className={styles.more__deco}></div>
        <div className={styles.card__text}>
          <div className={styles.card__title}>{projectTitle}</div>
          <div className={styles.description__container}>
            <p className={styles.more__description}>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
