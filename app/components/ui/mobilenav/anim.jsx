export const showMobileNav = {
  open: {
    x: "0%",
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  closed: {
    x: "100%",
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export const openCloseBtn = {
  open: {
    top: "30px",
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  closed: {
    top: "0px",
    opacity: 0,
    transition: {
      duration: 0.7,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};
export const buttonTextVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};
