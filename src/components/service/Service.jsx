import React from 'react';
import { FaCode, FaServer, FaMobile, FaDesktop, FaDatabase, FaTools } from 'react-icons/fa';

const Service = () => {
  const services = [
    {
      icon: <FaCode />,
      title: 'Frontend Development',
      description: 'Creating responsive and interactive user interfaces using React, JavaScript, and modern CSS frameworks.',
      features: ['React.js', 'JavaScript', 'Tailwind CSS', 'Responsive Design']
    },
    {
      icon: <FaServer />,
      title: 'Backend Development',
      description: 'Building robust server-side applications and APIs using Node.js and Express.',
      features: ['Node.js', 'Express.js', 'RESTful APIs', 'Authentication']
    },
    {
      icon: <FaDatabase />,
      title: 'Database Management',
      description: 'Designing and managing databases, ensuring data security and optimal performance.',
      features: ['MongoDB', 'MySQL', 'Data Modeling', 'Query Optimization']
    },
    {
      icon: <FaMobile />,
      title: 'Mobile Development',
      description: 'Developing cross-platform mobile applications with React Native.',
      features: ['React Native', 'Mobile UI/UX', 'App Performance', 'Native Features']
    },
    {
      icon: <FaDesktop />,
      title: 'Web Applications',
      description: 'Building full-stack web applications with modern technologies and best practices.',
      features: ['Full Stack', 'PWA', 'Performance', 'SEO']
    },
    {
      icon: <FaTools />,
      title: 'Maintenance & Support',
      description: 'Providing ongoing maintenance, updates, and technical support for applications.',
      features: ['Bug Fixing', 'Updates', 'Optimization', 'Support']
    }
  ];

  return (
    <div name='services' id='services' className='w-full min-h-screen py-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-8'>
        {/* Header */}
        <div className='text-center mb-16 space-y-4'>
        <span className='text-amber-900 text-sm font-medium tracking-[0.2em] uppercase'>Our Service</span>
          <h2 className='text-4xl sm:text-5xl font-bold text-gray-800'>My Services</h2>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            Providing comprehensive web development solutions tailored to your needs
          </p>
          <div className='w-24 h-1 bg-gradient-to-r from-amber-900 to-amber-600 mx-auto rounded-full'></div>
        </div>

        {/* Services Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <div 
              key={index}
              className='p-8 rounded-2xl hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden border border-amber-900/30 '
            >
              {/* Background Gradient */}
              <div className='absolute inset-0 bg-gradient-to-br from-amber-200/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
              
              {/* Content Container */}
              <div className='relative z-10'>
                {/* Icon with enhanced animation */}
                <div className='w-16 h-16 flex items-center justify-center bg-amber-100/50 rounded-xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500'>
                  <div className='text-3xl text-amber-900'>
                    {service.icon}
                  </div>
                </div>

                {/* Title with gradient on hover */}
                <h3 className='text-2xl font-bold text-gray-800 mb-4 group-hover:text-amber-900 transition-colors duration-300'>
                  {service.title}
                </h3>

                {/* Description */}
                <p className='text-gray-600 mb-8 leading-relaxed'>
                  {service.description}
                </p>

                {/* Features with enhanced styling */}
                <div className='space-y-3'>
                  {service.features.map((feature, idx) => (
                    <div 
                      key={idx} 
                      className='flex items-center gap-3 text-gray-700 group/feature hover:text-amber-900 transition-colors duration-300'
                    >
                      <div className='w-1.5 h-1.5 rounded-full bg-amber-900 group-hover/feature:scale-150 transition-transform duration-300'></div>
                      <span className='font-medium'>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Decoration */}
              <div className='absolute bottom-0 left-0 w-full h-1 bg-amber-950 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500'></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;