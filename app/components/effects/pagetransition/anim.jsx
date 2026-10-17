export const pageTransitionSlider = {
  initial: {
    y: "-100%",
  },
  animate: {
    y: "0",

    transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    y: "-100%",
    transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] },
  },
};

export const boxAnimation = {
  initial: {},
  animate: {
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.2,
    },
  },
  exit: {},
};

export const boxFadeIn = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
};
