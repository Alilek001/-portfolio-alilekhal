"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "./blur.module.scss";

export const BlurOverlay = () => {
  return (
    <motion.div
      className={styles.blurOverlay}
      initial={{ transform: "translateY(-30%)" }}
      animate={{ transform: "translateY(0)" }}
      transition={{ duration: 1, ease: [0.55, 0, 0.1, 1] }}
    ></motion.div>
  );
};
