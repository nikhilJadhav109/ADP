export const heroVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const sectionHeaderVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const formFieldVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const buttonVariants = {
  rest: { scale: 1, boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" },
  hover: { scale: 1.03, boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.15)" },
  tap: { scale: 0.97 },
  submit: {
    scale: [1, 1.05, 1],
    rotate: [0, 5, -5, 0],
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

export const successMessageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};
