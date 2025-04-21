import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { ReactTyped } from "react-typed";
import myImage from '../../assets/pro__backremoved.png';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { motion } from 'motion/react';

const Hero = () => {
  return (
    <div id='home' className='w-full bg- min-h-screen flex items-center justify-center py-28 px-4 '>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16'>
        {/* Left side hero section */}
        <div className='w-full md:w-1/2  flex items-start flex-col gap-10 p-4'>
          <div className='space-y-2'>
            <span className='text-amber-900 text-sm font-medium tracking-widest uppercase'>Welcome to my portfolio</span>
            <p className='text-gray-700 text-2xl font-semibold tracking-wide'>
              Hi there, I'm <span className='text-amber-900 font-bold'>Tizazab</span>
            </p>
          </div>

          <h2 className='text-xl bg-amber-100 rounded-2xl xs:text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-relaxed flex gap-2 sm:gap-3 md:gap-4'>
            I'm a{' '}
            <ReactTyped
              strings={[
                'Frontend Developer',
                'Backend Developer',
                'Full Stack Developer',
                'React Developer'
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop
              className='text-amber-900 border-b-2 border-amber-400'
            />
          </h2>

          <p className='text-gray-600 text-lg leading-relaxed max-w-[600px] font-medium'>
            I'm a passionate full-stack developer specializing in building 
            <span className='text-amber-900'> exceptional digital experiences</span>.
            Currently, I'm focused on building responsive full-stack web applications.
          </p>

          <div className='flex flex-col gap-8 w-full'>
           <a href="#projects">
           <button className='text-amber-900 group border-2 border-amber-900 px-10 py-4 text-lg flex items-center hover:bg-amber-950 hover:text-white duration-300 rounded-lg font-semibold shadow-lg w-fit'>
              View Work 
              <span className='group-hover:translate-x-3 duration-500'>
                <HiArrowNarrowRight className='ml-4 text-2xl' />
              </span>
            </button>
            </a> 
            

            {/* contact me div */}
            <div className='space-y-4'>
              <h3 className='text-gray-800 font-semibold text-lg flex items-center gap-2'>
                Let's Connect
                <div className='h-[1px] bg-amber-900/20 flex-grow ml-2'></div>
              </h3>

              {/* social media */}
              <div className='flex gap-8'>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"
                  className='text-gray-800 hover:text-amber-900 transform hover:-translate-y-1 transition-all duration-300'>
                  <FaGithub size={22} />
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"
                  className='text-gray-800 hover:text-amber-900 transform hover:-translate-y-1 transition-all duration-300'>
                  <FaLinkedin size={22} />
                </a>
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer"
                  className='text-gray-800 hover:text-amber-900 transform hover:-translate-y-1 transition-all duration-300'>
                  <FaTwitter size={22} />
                </a>
                <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer"
                  className='text-gray-800 hover:text-amber-900 transform hover:-translate-y-1 transition-all duration-300'>
                  <FaInstagram size={22} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right side hero section */}
        <div className='md:w-1/2   flex justify-center items-center p-8 relative'>
          {/* Floating shapes */}
          {/* Circles */}
          <div className='absolute top-8 -left-10 w-24 h-24 bg-amber-400/40 rounded-full mix-blend-multiply animate-pulse hidden md:block'></div>
          <div className='absolute bottom-20 right-0 w-36 h-36 bg-orange-300/40 rounded-full mix-blend-multiply animate-pulse delay-150 hidden md:block'></div>
        
        
          
          <div className='absolute top-20 -left-4 w-20 h-20 bg-amber-300 rounded-full mix-blend-multiply animate-pulse'></div>
          <div className='absolute bottom-20 -right-4 w-32 h-32 bg-amber-400 rounded-full mix-blend-multiply animate-pulse delay-150'></div>
          <div className='absolute top-1/2 right-4 w-16 h-16 bg-amber-250 rounded-lg rotate-45 mix-blend-multiply animate-pulse delay-300'></div>
          {/* Image container */}
          <div className=' w-full h-full '>
            
              <img 
                src={myImage} 
                alt="Profile" 
                className='object-cover object-center transition-all duration-500'
              />              

          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;