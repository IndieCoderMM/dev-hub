export const staggerContainer = (
  staggerChildren: number,
  delayChildren: number,
) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const slideIn = (
  direction: string,
  type: string,
  delay: number,
  duration: number,
) => ({
  hidden: {
    x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
    y: direction === "up" ? "-100%" : direction === "down" ? "100%" : 0,
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const fadeIn = (
  direction: string,
  type: string,
  delay: number,
  duration: number,
) => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "linear",
    },
  },
  exit: {
    x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
    y: direction === "up" ? -100 : direction === "down" ? 100 : 0,
    opacity: 0,
    transition: {
      type,
      delay,
      duration,
      ease: "easeIn",
    },
  },
});

export const sphereVariant = (
  direction: string,
  delay: number,
  duration: number,
) => ({
  hidden: {
    x: direction === "left" ? -300 : 300,
    rotate: 120,
    opacity: 0,
  },
  show: {
    x: 0,
    rotate: 0,
    opacity: 1,
    transition: {
      type: "spring",
      delay,
      duration,
      ease: "easeIn",
    },
  },
});

export const textVariant = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: "easeIn",
    },
  },
};
