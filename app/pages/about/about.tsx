"use client";
import styles from "./about.module.scss";
import Image from "next/image";
import React, { useRef } from "react";
import { BlurReveal } from "../../components/effects";
import { useInView } from "framer-motion";
import { useLang } from "../../components/i18n";
import { useCursor } from "../../components/context";

interface AboutProps {
  id?: string;
}

export const About: React.FC<AboutProps> = ({ id }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { t } = useLang();
  const { handleHoverStart, handleHoverEnd } = useCursor();

  return (
    <section className={styles.about__container} id={id}>
      <div className={styles.noise__container__white}></div>
      <div className={styles.about__content}>
        <div className={styles.about__left}>
          <BlurReveal isInView={isInView} delay={0} duration={1.2}>
            <h1 className={styles.about__h1} ref={ref}>
              <span className={styles.a__little}>{t.about.top}</span>
              <div className={styles.about__me}>{t.about.bottom}</div>
            </h1>
          </BlurReveal>

          <Image
            src="/images/ali.webp"
            width={550}
            height={620}
            alt={t.about.imageAlt}
            className={styles.about__image}
          />
        </div>
        <div className={styles.about__right}>
          <div className={styles.quote}>
            {t.about.quote[0]}
            <span className={styles.bg__orangeIsh}>{t.about.quote[1]}</span>
            {t.about.quote[2]}
          </div>
          <div>{t.about.p1}</div>
          <div>
            {t.about.p2[0]}
            <span className={styles.bg__green}>{t.about.p2[1]}</span>
            {t.about.p2[2]}
          </div>
          <div>
            {t.about.p3[0]}
            <span className={styles.bg__yellow}>{t.about.p3[1]}</span>
            {t.about.p3[2]}
          </div>
          <div className={styles.about__buttons}>
            <a
              href="/cv-ali-lekhal.pdf"
              download="CV_Ali_Lekhal_Hanifi.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cv__btn}
              onMouseEnter={handleHoverStart}
              onMouseLeave={handleHoverEnd}
            >
              {t.about.downloadCv}
            </a>
            <a
              href="https://www.linkedin.com/in/ali-lekhal-hanifi-528680437/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkedin__btn}
              onMouseEnter={handleHoverStart}
              onMouseLeave={handleHoverEnd}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
