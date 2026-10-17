"use client";
import styles from "./morework.module.scss";
import { motion, useInView } from "framer-motion";
import React, { useRef, useState } from "react";
import { moreCard } from "../../components/ui/morecard/cardData";
import { useLang } from "../../components/i18n";
import { MoreCard, MoreCardMobile } from "../../components/ui";
import {
  ModalHover,
  BlurReveal,
  TransitionLink,
} from "../../components/effects";
import { useMediaQuery } from "../../components/hooks";

interface MoreWorkProps {
  updateNavStyle: boolean;
  id: string;
  scrollYProgress: any;
}

export const MoreWork: React.FC<MoreWorkProps> = ({ id }) => {
  const [modal, setModal] = useState({ active: true, index: 0 });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isTabletL = useMediaQuery("(max-width: 960px)");
  const { t } = useLang();
  const cards = moreCard.map((card) => ({
    ...card,
    imageAlt: t.projects[card.id].imageAlt,
    description: t.projects[card.id].moreDescription,
    projectType: t.projects[card.id].moreType,
  }));

  return (
    <motion.section className={styles.more__section} id={id}>
      <div className={styles.noise__container__white}></div>
      <motion.div className={styles.more__content}>
        <BlurReveal isInView={isInView} duration={1.2} delay={0}>
          <h1
            ref={ref}
            className={styles.more__h1}
            aria-label={t.more.aria}
          >
            <span className={styles.more__word}>{t.more.top}</span>
            <div className={styles.flex}>
              <div className={styles.projects__word}>{t.more.bottom}</div>
              <span className={styles.more__amount}>(01)</span>
            </div>
          </h1>
        </BlurReveal>

        {isTabletL ? (
          <div className={styles.mobile__card__container}>
            {cards.map((card, i) => (
              <TransitionLink
                href={`/project/${card.id}`}
                key={card.cardNumber}
                className={styles.more__card__link}
              >
                <MoreCardMobile
                  key={i}
                  imageSrc={card.imageSrc}
                  imageAlt={card.imageAlt}
                  projectTitle={card.projectTitle}
                  projectType={card.projectType}
                  description={card.description}
                  cardNumber={card.cardNumber}
                />
              </TransitionLink>
            ))}
          </div>
        ) : (
          <div className={styles.more__flex__container}>
            <div className={styles.hover__container}>
              <ModalHover modal={modal}></ModalHover>
            </div>
            <div className={styles.more__card__container}>
              {cards.map((card, i) => (
                <TransitionLink
                  href={`/project/${card.id}`}
                  key={card.cardNumber}
                  className={styles.more__card__link}
                >
                  <MoreCard
                    key={i}
                    imageSrc={card.imageSrc}
                    imageAlt={card.imageAlt}
                    projectTitle={card.projectTitle}
                    projectType={card.projectType}
                    description={card.description}
                    cardNumber={card.cardNumber}
                    setModal={setModal}
                    index={i}
                    isActive={modal.active && modal.index === i}
                  />
                </TransitionLink>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </motion.section>
  );
};
