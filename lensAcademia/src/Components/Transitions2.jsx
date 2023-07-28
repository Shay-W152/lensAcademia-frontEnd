import React from 'react';
import { motion } from 'framer-motion';

const Transitions2 = ({ children }) => {
  const animationVariants = {
    initial: { x: '-100%', opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    exit: { x: '100%', opacity: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      variants={animationVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export default Transitions2;
