import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Service from './components/service/Service';
import Project from './components/project/project';
import Contact from './components/contact/Contact';
import Footer from './components/footer/footer';
import { Toaster } from 'sonner';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Create particles on mouse move
      if (Math.random() > 0.7) {
        const particle = {
          id: Date.now(),
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 4 + 2,
          color: `hsl(${Math.random() * 60 + 200}, 100%, 50%)`
        };
        setParticles(prev => [...prev, particle]);
        
        // Remove particle after animation
        setTimeout(() => {
          setParticles(prev => prev.filter(p => p.id !== particle.id));
        }, 3000);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const animations = {
    hero: {
      initial: { y: 50, opacity: 0 },
      whileInView: { y: 0, opacity: 1 },
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
      initial: { x: -100, opacity: 0, scale: 0.95 },
      whileInView: { x: 0, opacity: 1, scale: 1 },
      transition: { duration: 0.9, ease: 'easeOut' },
      viewport: { once: true }
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
      transition: { duration: 0.6, type: 'spring', bounce: 0.8 },
      viewport: { once: true }
    }
  };

  return (
    <>
      <Toaster position='top-right' />
      
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 bg-pattern" />
      
      {/* Mouse Follow Effect */}
      <motion.div
        className="fixed w-96 h-96 rounded-full pointer-events-none -z-10"
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          mass: 2
        }}
        style={{
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)",
          filter: "blur(40px)"
        }}
      />

      {/* Particles */}
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="particle"
          initial={{ 
            x: particle.x, 
            y: particle.y,
            opacity: 0,
            scale: 0
          }}
          animate={{ 
            y: particle.y - 100,
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            rotate: 360
          }}
          transition={{ duration: 3, ease: "easeOut" }}
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            borderRadius: '50%',
            position: 'fixed',
            pointerEvents: 'none',
            zIndex: 0
          }}
        />
      ))}

      {/* Progress Bar */}
      <motion.div
        className="fixed overflow-x-hidden top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] origin-left z-50"
        style={{ scaleX }}
      />

      <motion.div 
        className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />
        
        <AnimatePresence>
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
        </AnimatePresence>
      </motion.div>
    </>
  );
}

export default App;