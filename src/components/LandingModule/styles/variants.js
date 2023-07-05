import { motion,Variants } from "framer-motion";


export const headerVariant = {
  initial: {
    y: -50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 1.5,type:"spring",bounce:0.7,delay:2 },
  },
};
export const fadeIn = {
  initial: {
    // x: -100,
    opacity: 0,
  },
  animate: {
    // x: 0,
    opacity: 1,
    transition: { duration: 1, ease: "easeIn" },
  },
};
export const fadePara ={
  offscreen: {
    x: -100,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity:1,
    transition: {
      ease: "easeInOut",
      bounce: 0.4,
      duration: 1,
    },
  },
}
export const fadePara2 ={
  offscreen: {
    x: 100,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity:1,
    transition: {
      ease: "easeInOut",
      bounce: 0.4,
      duration: 1,
    },
  },
}
export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 1,
      delayChildren: 1.2,
    },
  },
};
export const cardVariants = {
  offscreen: {
    y: 300,
    // opacity:0;
  },
  onscreen: {
    y: 0,
    // opacity:1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1,
    },
  },
};

export const LoaderPage ={
  initial: {
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: .7, ease: "easeIn" },
  },
}