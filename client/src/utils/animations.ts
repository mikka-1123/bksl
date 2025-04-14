import { Variants } from 'framer-motion';

export const fadeIn = (direction: 'up' | 'down' | 'left' | 'right' = 'up', delay: number = 0): Variants => {
  return {
    hidden: {
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
      opacity: 0
    },
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 500,
        delay
      }
    }
  };
};

export const staggerChildren = (staggerTime: number = 0.1): Variants => {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerTime
      }
    }
  };
};

export const fadeInScale: Variants = {
  hidden: { 
    opacity:
    0, 
    scale: 0.9 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.6 
    }
  }
};

export const blurIn: Variants = {
  hidden: { 
    opacity: 0, 
    filter: 'blur(10px)' 
  },
  visible: { 
    opacity: 1, 
    filter: 'blur(0px)',
    transition: { 
      duration: 0.5 
    }
  }
};
