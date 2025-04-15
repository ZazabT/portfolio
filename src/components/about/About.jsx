import React from 'react';
import { FaCode, FaServer, FaMobile, FaDatabase } from 'react-icons/fa';

const About = () => {
  return (
    <div name='about' id='about' className='w-full min-h-screen py-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-8'>
        {/* Section Header */}
        <div className='pb-16 w-full text-center space-y-4 animate-fade-up'>
          <span className='text-amber-900 text-sm font-medium tracking-[0.2em] uppercase'>About Me</span>
          <h2 className='text-4xl sm:text-5xl font-bold gradient-text mt-2'>Who I Am</h2>
          <div className='w-24 h-1 bg-gradient-to-r from-amber-900 to-amber-600 mx-auto rounded-full'></div>
        </div>

        {/* Main Content */}
        <div className='grid md:grid-cols-2 gap-12'>
          {/* Left Column - About Text */}
          <div className='glass-effect  p-8 space-y-6 '>
            <div className='flex items-center gap-4 mb-6'>
              <div className='w-1 h-16 bg-gradient-to-b from-amber-900 to-amber-600'></div>
              <h3 className='text-2xl font-bold text-gray-800'>My Journey</h3>
            </div>
            <p className='text-lg leading-relaxed text-gray-700'>
              I am a <span className='text-amber-900 font-semibold'>passionate Full Stack Developer</span> with a strong foundation in web technologies
              and a keen eye for creating elegant solutions.
            </p>
            <p className='text-lg leading-relaxed text-gray-700'>
              I specialize in building <span className='text-amber-900 font-semibold'>responsive web applications</span> using modern technologies.
            </p>
            <p className='text-lg leading-relaxed text-gray-700'>
              When I'm not coding, I enjoy playing <span className='text-amber-900 font-semibold'>video games </span>.
            </p>
            
            {/* Added Education Section */}
            <div className='pt-6 border-t border-gray-200'>
              <h4 className='text-xl font-semibold text-gray-800 mb-4'>Education</h4>
              <div className='space-y-3'>
                <div className='flex justify-between items-center'>
                  <span className='font-medium text-gray-700'>Computer Science</span>
                  <span className='text-amber-900'>2020 - 2023</span>
                </div>
                
              </div>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className='space-y-8'>
            {/* Skills Progress */}
            <div className=' p-8 animate-slide-right'>
              <div className='flex items-center gap-4 mb-8'>
                <h3 className='text-2xl font-bold text-gray-800'>Technical Skills</h3>
                <div className='h-[1px] flex-grow bg-gradient-to-r from-amber-900/20 to-transparent'></div>
              </div>
              
              <div className='space-y-6'>
                {/* Progress bars with enhanced styling */}
                {[
                  { name: 'React.js', level: '90%' },
                  { name: 'JavaScript', level: '85%' },
                  { name: 'Tailwind CSS', level: '95%' },
                  { name: 'Node.js', level: '80%' },
                  { name: 'MongoDB', level: '75%' }
                ].map((skill, index) => (
                  <div key={index} className='relative group'>
                    <div className='flex justify-between mb-2'>
                      <span className='text-base font-medium text-gray-700 group-hover:text-amber-900 transition-colors duration-300'>{skill.name}</span>
                      <span className='text-sm font-medium text-amber-900'>{skill.level}</span>
                    </div>
                    <div className='w-full h-3 bg-gray-200 rounded-full overflow-hidden'>
                      <div 
                        className='progress-bar-animation bg-gradient-to-r from-amber-900 to-amber-600 h-full rounded-full'
                        style={{ width: skill.level }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Skills */}
            <div className='p-8'>
              <h3 className='text-xl font-bold text-gray-800 mb-6'>Additional Skills</h3>
              <div className='grid grid-cols-2 gap-4'>
                {[
                  'Git & GitHub',
                  'RESTful APIs',
                  'UI/UX Design',
                  'Responsive Design',
                  'Testing',
                  'Agile/Scrum'
                ].map((skill, index) => (
                  <div key={index} className='flex items-center gap-2 text-gray-700'>
                    <div className='w-2 h-2 rounded-full bg-amber-900'></div>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Experience Counter with enhanced styling */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mt-16'>
          {[
            { number: '1+', text: 'Years Experience' },
            { number: '20+', text: 'Projects Completed' },
            { number: '10+', text: 'Happy Clients' },
            { number: '5+', text: 'Technologies' }
          ].map((item, index) => (
            <div key={index} className='p-6 text-center transform hover:-translate-y-2 transition-all duration-300'>
              <h3 className='text-4xl font-bold gradient-text text-amber-900 mb-2 group-hover:scale-110 transition-transform duration-300'>{item.number}</h3>
              <p className='text-gray-500 font-medium'>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;