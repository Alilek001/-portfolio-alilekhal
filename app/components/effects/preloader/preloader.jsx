"use client";
import React, { useState, useEffect } from "react";
import styles from "./preloader.module.scss";
import { motion } from "framer-motion";
import { slide, textReveal } from "./anim";
import { useMediaQuery } from "../../hooks";
import { useLang } from "../../i18n";

export const Preloader = () => {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const isMobile = useMediaQuery("(max-width: 560px)");
  const { t } = useLang();

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  const initialPath = () => {
    if (isMobile) {
      return `M0 0 L${dimension.width} 0 L${dimension.width} ${
        dimension.height
      } Q${dimension.width / 2} ${dimension.height + 150} 0 ${
        dimension.height
      }  L0 0`;
    } else {
      return `M0 0 L${dimension.width} 0 L${dimension.width} ${
        dimension.height
      } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
        dimension.height
      }  L0 0`;
    }
  };

  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath(),
      transition: { duration: 1.1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 1.1, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
    },
  };

  return (
    <motion.div
      variants={slide}
      initial="initial"
      exit="exit"
      className={styles.preloader__container}
    >
      {dimension.height > 0 && (
        <>
          <motion.div
            className={styles.loader__hello}
            variants={textReveal}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {t.preloader}
          </motion.div>

          <svg>
            <motion.path
              variants={curve}
              initial="initial"
              exit="exit"
            ></motion.path>
          </svg>
        </>
      )}
    </motion.div>
  );
};
