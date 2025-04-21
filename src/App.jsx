import { motion, useScroll, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Service from './components/service/Service';
import Project from './components/project/project';
import Contact from './components/contact/Contact';
import Footer from './components/footer/footer';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Smooth reveal animation for sections
  const fadeInUp = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.8 }
  };

  return (
    <>
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-amber-900 origin-left z-100"
        style={{ scaleX }}
      />

      <motion.div 
        className='mx-auto max-w-7xl px-10 space-y-20'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />
        
        <motion.div {...fadeInUp}>
          <Hero />
        </motion.div>

        <motion.div 
          {...fadeInUp}
          transition={{ delay: 0.5 }}
        >
          <About />
        </motion.div>

        <motion.div 
          {...fadeInUp}
          transition={{ delay: 0.2 }}
        >
          <Service />
        </motion.div>

        <motion.div 
          {...fadeInUp}
          transition={{ delay: 0.3 }}
        >
          <Project />
        </motion.div>

        <motion.div 
          {...fadeInUp}
          transition={{ delay: 0.4 }}
        >
          <Contact />
        </motion.div>

        <motion.div 
          {...fadeInUp}
          transition={{ delay: 0.5 }}
        >
          <Footer />
        </motion.div>

        {/* Scroll to top button */}

      </motion.div>
    </>
  );
}

export default App;