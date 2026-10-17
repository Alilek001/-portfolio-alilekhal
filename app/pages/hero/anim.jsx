export const textSlideUp = {
  initial: {
    y: "200px",
    opacity: 0,
  },
  animate: {
    y: "0",
    transition: {
      duration: 1.1,
      delay: 1.4,
      ease: [0.76, 0, 0.24, 1],
      staggerChildren: 0.1,
      delayChildren: 1.8,
    },
    opacity: 1,
  },
};

export const opacityReveal = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { duration: 0.6, delay: 2 },
  },
};

export const opacityRevealTwo = {
  initial: {
    opacity: 0,
    filter: "blur(4px)",
  },
  animate: {
    opacity: 1,
    filter: "0",
    transition: { duration: 0.5, delay: 2.2 },
  },
};

export const opacityRevealThree = {
  initial: {
    opacity: 0,
    filter: "blur(20px)",
  },
  animate: {
    opacity: 1,
    filter: "0",
    transition: { duration: 0.7, delay: 1.6 },
  },
};
