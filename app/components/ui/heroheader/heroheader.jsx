"use client";
import React, { useEffect } from "react";
import styles from "./heroheader.module.scss";
import { motion, useAnimation } from "framer-motion";
import { opacityRevealThree } from "./anim";

export const HeroHeader = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("animate");
  }, [controls]);

  return (
    <motion.h1
      className={styles.hero__header}
      variants={opacityRevealThree}
      initial="initial"
      animate={controls}
      aria-label="Ali Lekhal Hanifi"
    >
      <span className={styles.hero__name}>Ali Lekhal Hanifi</span>
    </motion.h1>
  );
};
