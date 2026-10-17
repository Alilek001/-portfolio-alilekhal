export const slide = {
  initial: {
    x: "0",
    y: "0",
  },
  exit: {
    y: "-100%",
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
  },
};

export const textReveal = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,

    transition: { duration: 0.3, delay: 0.4 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2, ease: [0.76, 0, 0.24, 1] },
  },
};
