import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-50 pointer-events-none overflow-hidden">
      <motion.div
        style={{ scaleX }}
        className="w-full h-full origin-left shadow-[0_0_12px_rgba(182,0,168,0.8)]"
      >
        <div
          className="w-full h-full"
          style={{
            background:
              'linear-gradient(90deg, #B600A8 0%, #7621B0 35%, #BE4C00 70%, #BBCCD7 100%)',
          }}
        />
      </motion.div>
    </div>
  );
};

export default ScrollProgressBar;
