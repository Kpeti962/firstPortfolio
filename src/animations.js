export const titleAnim = {
  hidden: {
    y: 0,
    opacity: 0,
  },
  show: {
    y: 300,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
    when: "beforeChildren",
    staggerChildren: 0.2,
  },
  exit: {
    y: 300,
    opacity: 0,
  },
};

export const nameAnim = {
  hidden: {
    scale: 3,
    opacity: 0,
  },

  show: {
    scale: 1,
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 3,
    },
  },
};

export const selfImgAnim = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
  hidden: { opacity: 0, x: -550 },
};
export const selfShortStoryAnim = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeIn" },
  },
  hidden: { opacity: 0, x: 150 },
};

export const spiderWebAnim = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    pathOffset: 1,
  },
  show: {
    opacity: 1,
    transition: { duration: 5 },
    pathLength: 1,
    pathOffset: 0,
  },
};
