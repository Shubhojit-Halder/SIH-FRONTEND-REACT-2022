export const fadeIn = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "anticipate",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "anticipate",
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