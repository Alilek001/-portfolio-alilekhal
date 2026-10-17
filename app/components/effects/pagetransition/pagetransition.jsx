"use client";
import styles from "./pagetransition.module.scss";
import React, { useState, useEffect } from "react";
import { useTransitionProvider } from "../../context";
import { useMediaQuery } from "../../hooks";
import { pageTransitionSlider, boxAnimation, boxFadeIn } from "./anim";
import { motion } from "framer-motion";

export const PageTransition = () => {
  const { transitionStage } = useTransitionProvider();
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [svgDisplay, setSvgDisplay] = useState("none");
  const isMobile = useMediaQuery("(max-width: 560px)");

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (transitionStage === "animate" || transitionStage === "exit") {
      setSvgDisplay("block");
    } else {
      setTimeout(() => {
        setSvgDisplay("none");
      }, 1200);
    }
  }, [transitionStage]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: targetPath,
      height: 0,
      transition: { duration: 1.1, ease: [0.76, 0, 0.24, 1] },
    },
    animate: {
      d: initialPath,
      transition: { duration: 1.1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 1.1, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
    },
  };

  return (
    <motion.div
      variants={pageTransitionSlider}
      initial="initial"
      animate={transitionStage}
      className={styles.transition__container}
    >
      <motion.div
        variants={boxAnimation}
        initial="initial"
        animate={transitionStage}
        exit="exit"
        className={styles.transition__boxes}
      >
        <motion.div
          className={styles.blue__box}
          variants={boxFadeIn}
        ></motion.div>
        <motion.div
          className={styles.pink__box}
          variants={boxFadeIn}
        ></motion.div>
        <motion.div
          className={styles.green__box}
          variants={boxFadeIn}
        ></motion.div>
        <motion.div
          className={styles.yellow__box}
          variants={boxFadeIn}
        ></motion.div>
      </motion.div>
      {dimension.height > 0 && (
        <>
          <svg
            className={styles.transition__curve}
            style={{ display: svgDisplay }}
          >
            <motion.path
              variants={curve}
              initial="initial"
              animate={transitionStage}
              exit="exit"
              fill="#1b66b1"
            ></motion.path>
          </svg>
        </>
      )}
    </motion.div>
  );
};
