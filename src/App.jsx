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

  const animations = {
    hero: {
      initial: { y: 50, opacity: 0, rotate: 5 },
      whileInView: { y: 0, opacity: 1, rotate: 0 },
      transition: { duration: 1, type: 'spring', stiffness: 80 },
      viewport: { once: true }
    },
    about: {
      initial: { x: -100, opacity: 0 },
      whileInView: { x: 0, opacity: 1 },
      transition: { duration: 1, ease: 'easeOut' },
      viewport: { once: true }
    },
    services: {
      initial: { scale: 0.8, opacity: 0 },
      whileInView: { scale: 1, opacity: 1 },
      transition: { duration: 0.8, type: 'spring', bounce: 0.8 },
      viewport: { once: true }
    },
    projects: {
      initial: { 
        y: 100, 
        opacity: 0, 
        scale: 0.8, 
        rotate: -10 
      },
      whileInView: { 
        y: 0, 
        opacity: 1, 
        scale: 1, 
        rotate: 0 
      },
      transition: { 
        duration: 1.2, 
        type: 'spring', 
        stiffness: 150, 
        damping: 15, 
        mass: 0.8, 
        bounce: 0.4 
      },
      viewport: { 
        once: true, 
        margin: '0px 0px -100px 0px' 
      }
    },
    contact: {
      initial: { x: 100, opacity: 0, scale: 0.95 },
      whileInView: { x: 0, opacity: 1, scale: 1 },
      transition: { duration: 0.9, ease: 'easeOut' },
      viewport: { once: true }
    },
    footer: {
      initial: { y: 30, opacity: 0 },
      whileInView: { y: 0, opacity: 1 },
      transition: { duration: 0.6  , type: 'spring', bounce: 0.8},
      viewport: { once: true }
    }
  };

  return (
    <>
      <motion.div
        className="fixed overflow-x-hidden top-0 left-0 right-0 h-1 bg-amber-900 origin-left z-100"
        style={{ scaleX }}
      />

      <motion.div 
        className='mx-auto max-w-7xl px-10 space-y-20'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />
        
        <motion.div {...animations.hero}>
          <Hero />
        </motion.div>

        <motion.div {...animations.about}>
          <About />
        </motion.div>

        <motion.div {...animations.services}>
          <Service />
        </motion.div>

        <motion.div {...animations.projects}>
          <Project />
        </motion.div>

        <motion.div {...animations.contact}>
          <Contact />
        </motion.div>

        <motion.div {...animations.footer}>
          <Footer />
        </motion.div>

      </motion.div>
    </>
  );
}

export default App;