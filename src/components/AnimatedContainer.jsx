import { motion } from "framer-motion";

const animations = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -100 },
};

const AnimatedContainer = ({ children }) => {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3, delay: 0.2, type: "spring", stiffness: 75 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedContainer;
