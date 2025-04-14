import React from 'react';
import { FaCode, FaServer, FaMobile, FaDatabase } from 'react-icons/fa';

const About = () => {
  return (
    <div name='about' className='w-full min-h-screen bg-gradient-to-b from-amber-50 to-white py-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-8'>
        {/* Section Header */}
        <div className='pb-8 w-full text-center'>
          <h2 className='text-4xl font-bold text-gray-800 mt-2'>Who I Am</h2>
        </div>

        {/* Main Content */}
        <div className='grid md:grid-cols-2 gap-12'>
          {/* Left Column - About Text */}
          <div className='text-gray-600 space-y-6'>
            <p className='text-lg leading-relaxed'>
              I am a passionate Full Stack Developer with a strong foundation in web technologies
              and a keen eye for creating elegant solutions. My journey in web development
              started with curiosity and has evolved into expertise.
            </p>
            <p className='text-lg leading-relaxed'>
              I specialize in building responsive web applications using modern technologies
              like React, Node.js, and various databases. I'm constantly learning and adapting
              to new technologies to deliver the best possible solutions.
            </p>
            <p className='text-lg leading-relaxed'>
              When I'm not coding, I enjoy contributing to open-source projects and sharing
              my knowledge with the developer community.
            </p>
          </div>

          {/* Right Column - Skills */}
          <div className='grid grid-cols-2 gap-6'>
            <div className='p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow'>
              <FaCode className='text-4xl text-amber-900 mb-4' />
              <h3 className='text-xl font-semibold text-gray-800 mb-2'>Frontend</h3>
              <p className='text-gray-600'>React, JavaScript, HTML/CSS, Tailwind</p>
            </div>

            <div className='p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow'>
              <FaServer className='text-4xl text-amber-900 mb-4' />
              <h3 className='text-xl font-semibold text-gray-800 mb-2'>Backend</h3>
              <p className='text-gray-600'>Node.js, Express, REST APIs</p>
            </div>

            <div className='p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow'>
              <FaDatabase className='text-4xl text-amber-900 mb-4' />
              <h3 className='text-xl font-semibold text-gray-800 mb-2'>Database</h3>
              <p className='text-gray-600'>MongoDB, MySQL, PostgreSQL</p>
            </div>

            <div className='p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow'>
              <FaMobile className='text-4xl text-amber-900 mb-4' />
              <h3 className='text-xl font-semibold text-gray-800 mb-2'>Other</h3>
              <p className='text-gray-600'>Git, Docker, AWS, Responsive Design</p>
            </div>
          </div>
        </div>

        {/* Experience Counter */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mt-16'>
          <div className='text-center'>
            <h3 className='text-4xl font-bold text-amber-900'>2+</h3>
            <p className='text-gray-600 mt-2'>Years Experience</p>
          </div>
          <div className='text-center'>
            <h3 className='text-4xl font-bold text-amber-900'>20+</h3>
            <p className='text-gray-600 mt-2'>Projects Completed</p>
          </div>
          <div className='text-center'>
            <h3 className='text-4xl font-bold text-amber-900'>10+</h3>
            <p className='text-gray-600 mt-2'>Happy Clients</p>
          </div>
          <div className='text-center'>
            <h3 className='text-4xl font-bold text-amber-900'>5+</h3>
            <p className='text-gray-600 mt-2'>Technologies</p>
          </div>
        </div>

        {/* Skills Progress */}
                <div className='mt-16 space-y-6'>
                  <div className='text-center mb-8'>
                    <h2 className='text-2xl font-bold text-gray-800'>My Skills</h2>
                  </div>
                  
                  <div className='space-y-5'>
                    <div className='relative'>
                      <div className='flex justify-between mb-1'>
                        <span className='text-base font-medium text-gray-700'>React.js</span>
                        <span className='text-sm font-medium text-amber-900'>90%</span>
                      </div>
                      <div className='w-full bg-gray-200 rounded-full h-2.5'>
                        <div className='bg-amber-900 h-2.5 rounded-full transition-all duration-500 ease-out'
                             style={{ width: '90%' }}></div>
                      </div>
                    </div>
                    
                    <div className='relative'>
                      <div className='flex justify-between mb-1'>
                        <span className='text-base font-medium text-gray-700'>JavaScript</span>
                        <span className='text-sm font-medium text-amber-900'>85%</span>
                      </div>
                      <div className='w-full bg-gray-200 rounded-full h-2.5'>
                        <div className='bg-amber-900 h-2.5 rounded-full transition-all duration-500 ease-out'
                             style={{ width: '85%' }}></div>
                      </div>
                    </div>
                    
                    <div className='relative'>
                      <div className='flex justify-between mb-1'>
                        <span className='text-base font-medium text-gray-700'>Tailwind CSS</span>
                        <span className='text-sm font-medium text-amber-900'>95%</span>
                      </div>
                      <div className='w-full bg-gray-200 rounded-full h-2.5'>
                        <div className='bg-amber-900 h-2.5 rounded-full transition-all duration-500 ease-out'
                             style={{ width: '95%' }}></div>
                      </div>
                    </div>
                    
                    <div className='relative'>
                      <div className='flex justify-between mb-1'>
                        <span className='text-base font-medium text-gray-700'>Node.js</span>
                        <span className='text-sm font-medium text-amber-900'>80%</span>
                      </div>
                      <div className='w-full bg-gray-200 rounded-full h-2.5'>
                        <div className='bg-amber-900 h-2.5 rounded-full transition-all duration-500 ease-out'
                             style={{ width: '80%' }}></div>
                      </div>
                    </div>
                    
                    <div className='relative'>
                      <div className='flex justify-between mb-1'>
                        <span className='text-base font-medium text-gray-700'>MongoDB</span>
                        <span className='text-sm font-medium text-amber-900'>75%</span>
                      </div>
                      <div className='w-full bg-gray-200 rounded-full h-2.5'>
                        <div className='bg-amber-900 h-2.5 rounded-full transition-all duration-500 ease-out'
                             style={{ width: '75%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
      </div>
    </div>
  );
};

export default About;