import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import airbnb from '../../assets/airbnb.jpg';
import ethiofund from '../../assets/fund.jpg';
import tafach from '../../assets/recipe.jpg';
import voice_assistant from '../../assets/voice_assistent.jpg';
const Project = () => {
  const projects = [
    {
      title: 'Airbnb Clone "Yegna" website',
      description: 'Full-stack accommodation booking platform with features like property listing, booking, and user authentication.',
      image: airbnb, 
      tech: ['Laravel', 'React', 'MySQL', 'Tailwind CSS'],
      github: 'https://github.com/ZazabT/ye-gan',
      live: '#'
    },
    {
      title: 'EthioFund',
      description: 'Crowdfunding platform for Ethiopian projects with secure payment integration using Chapa payment gateway.',
      image: '../../assets/fund.jpg',
      tech: ['Laravel', 'MySQL', 'Chapa', 'Bootstrap'],
      github: 'https://github.com/ZazabT/ethiofund10ChapaTry', 
      live: '#'
    },
    {
      title: 'Tafach Recipe',
      description: 'Ethiopian food recipe sharing platform with user contributions and recipe search functionality.',
      image: '../assets/recipe.jpg',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/ZazabT/Tafach',
      live: '#'
    },
    {
      title: 'Voice Assistant',
      description: 'Mobile voice assistant app powered by Gemini AI for natural language processing and voice commands.',
      image: '../assets/voice_assistent.jpg',
      tech: ['Flutter', 'Dart', 'Gemini AI', 'Firebase'],
      github: 'https://github.com/ZazabT/Voice-Assistant',
      live: '#'
    }
  ];

  return (
    <div name='projects' className='w-full min-h-screen py-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-8'>
        {/* Header */}
        <div className='text-center mb-16 space-y-4'>
          <span className='text-amber-900 text-sm font-medium tracking-[0.2em] uppercase'>Portfolio</span>
          <h2 className='text-4xl sm:text-5xl font-bold text-gray-800'>Featured Projects</h2>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            Showcasing my best work and creative solutions
          </p>
          <div className='w-24 h-1 bg-gradient-to-r from-amber-900 to-amber-600 mx-auto rounded-full'></div>
        </div>

        {/* Projects Grid */}
        <div className='grid md:grid-cols-2 gap-8'>
          {projects.map((project, index) => (
            <div 
              key={index}
              className='glass-effect rounded-2xl overflow-hidden group hover:-translate-y-2 transition-all duration-500'
            >
              {/* Project Image */}
              <div className='relative h-48 overflow-hidden'>
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10'></div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500'
                />
                {/* Links */}
                <div className='absolute top-4 right-4 flex gap-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <a 
                    href={project.github}
                    className='p-2 bg-white/90 rounded-lg hover:bg-amber-900 hover:text-white transition-colors duration-300'
                  >
                    <FaGithub className='text-xl' />
                  </a>
                  <a 
                    href={project.live}
                    className='p-2 bg-white/90 rounded-lg hover:bg-amber-900 hover:text-white transition-colors duration-300'
                  >
                    <FaExternalLinkAlt className='text-xl' />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className='p-6 space-y-4'>
                <h3 className='text-xl font-bold text-gray-800 group-hover:text-amber-900 transition-colors duration-300'>
                  {project.title}
                </h3>
                <p className='text-gray-600'>
                  {project.description}
                </p>
                {/* Tech Stack */}
                <div className='flex flex-wrap gap-2'>
                  {project.tech.map((tech, idx) => (
                    <span 
                      key={idx}
                      className='px-3 py-1 bg-amber-100/50 text-amber-900 rounded-full text-sm font-medium'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;