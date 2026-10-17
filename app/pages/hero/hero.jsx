import React from "react";
import { motion } from "framer-motion";
import styles from "./hero.module.scss";
import { HeroHeader } from "../../components/ui/heroheader/heroheader.jsx";
import { useLocalTime, useMediaQuery } from "../../components/hooks";
import { useLang } from "../../components/i18n";
import Link from "next/link";

import {
  textSlideUp,
  opacityReveal,
  opacityRevealTwo,
  opacityRevealThree,
} from "./anim";

export const Hero = ({ id }) => {
  const localTime = useLocalTime();
  const { t } = useLang();
  const isTablet = useMediaQuery("(max-width: 768px)");

  return (
    <div className={`${styles.hero__container} ${styles.noise}`} id={id}>
      <div className={styles.noise__container}></div>
      <div className={styles.hero__content__container}>
        <div className={styles.hero__mid}>
          {isTablet ? (
            ""
          ) : (
            <motion.div
              variants={opacityReveal}
              initial="initial"
              animate="animate"
              className={styles.hero__info__container}
            >
              <p>{t.hero.available}</p>
              <div>
                <div>{t.hero.location}</div>
                <div suppressHydrationWarning>{localTime}</div>
              </div>
              <p>{t.hero.tagline}</p>
            </motion.div>
          )}

          <div className={styles.h1__container}>
            {isTablet ? (
              <motion.div
                variants={opacityRevealThree}
                initial="initial"
                animate="animate"
              >
                <div className={styles.h1__first}>Ali</div>
                <h1 className={styles.h1__last}>Lekhal Hanifi</h1>
              </motion.div>
            ) : (
              <HeroHeader />
            )}
            {isTablet ? (
              <motion.div
                variants={opacityRevealTwo}
                initial="initial"
                animate="animate"
              >
                <motion.div
                  className={styles.hero__subheader__mobile}
                  variants={opacityRevealTwo}
                  initial="initial"
                  animate="animate"
                >
                  {t.hero.role}
                </motion.div>
                <div className={styles.mobile__time}>{localTime}, {t.hero.city}</div>
              </motion.div>
            ) : (
              <motion.div
                variants={opacityRevealTwo}
                initial="initial"
                animate="animate"
              >
                <div className={styles.hero__subheader}>{t.hero.role}</div>
              </motion.div>
            )}
          </div>
        </div>
        <div className={styles.bottom__container}>
          <div className={styles.bottom__space__between}>
            <motion.div
              variants={textSlideUp}
              initial="initial"
              animate="animate"
              className={styles.bottom__links}
            >

              <Link
                href="https://github.com/Alilek001"
                target="blank"
                style={{ textDecoration: "none" }}
              >
                GitHub
              </Link>
            </motion.div>
            <motion.div
              variants={textSlideUp}
              initial="initial"
              animate="animate"
              className={styles.scroll__down}
            >
              {t.hero.scroll}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
