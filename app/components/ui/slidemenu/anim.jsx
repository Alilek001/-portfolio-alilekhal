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

export const itemReveal = {
  initial: {
    x: "70px",
    opacity: 0,
  },
  revealed: {
    x: "0px",
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.76, 0, 0.24, 1],
      staggerChildren: 0.05,
      when: "beforeChildren",
    },
  },
};

export const revealBoxes = {
  initial: {
    opacity: 0,
  },
  revealed: {
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: 0.4,
      staggerChildren: 0.05,
      when: "beforeChildren",
    },
  },
};

export const scaleSpan = {
  initial: {
    scale: 0,
    transition: {
      duration: 0.1,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  hovered: {
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export const itemSlide = {
  initial: {
    x: "-10px",
    transition: {
      duration: 0.3,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  hovered: {
    x: "8px",
    transition: {
      duration: 0.3,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export const smallTextLeftReveal = {
  initial: {
    opacity: 0,
  },
  revealed: {
    opacity: 1,
    transition: { duration: 0.2, delay: 0.7, ease: [0.76, 0, 0.24, 1] },
  },
};
export const smallTextReveal = {
  initial: {
    opacity: 0,
  },
  revealed: {
    opacity: 1,
    transition: { duration: 0.2, delay: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
};
