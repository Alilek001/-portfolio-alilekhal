import React from "react";
import { motion } from "framer-motion";

const createBlurRevealAnim = (duration = 1.1, delay = 0) => ({
  initial: {
    opacity: 0,
    filter: "blur(20px)",
  },
  animate: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration, delay, ease: [0.76, 0, 0.24, 1] },
  },
});

export const BlurReveal = ({ children, isInView, duration, delay }) => {
  const BlurRevealAnim = createBlurRevealAnim(duration, delay);
  return (
    <motion.div
      variants={BlurRevealAnim}
      initial="initial"
      animate={isInView ? "animate" : ""}
    >
      {children}
    </motion.div>
  );
};
