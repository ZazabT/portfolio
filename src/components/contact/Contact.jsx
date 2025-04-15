import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div name='contact' id='contact' className='w-full min-h-screen py-20 '>
      <div className='max-w-7xl mx-auto px-4 sm:px-8'>
        {/* Header */}
        <div className='text-center mb-16 space-y-4'>
          <span className='text-amber-900 text-sm font-medium tracking-[0.2em] uppercase'>Get in Touch</span>
          <h2 className='text-4xl sm:text-5xl font-bold text-gray-800'>Contact Me</h2>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            Let's discuss your project and see how I can help bring your ideas to life
          </p>
          <div className='w-24 h-1 bg-gradient-to-r from-amber-900 to-amber-600 mx-auto rounded-full'></div>
        </div>

        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Contact Info */}
          <div className='space-y-8'>
            <div className='glass-effect p-8 rounded-2xl space-y-8 border border-amber-100/30 shadow-[0_0_15px_rgba(251,191,36,0.05)]'>
              {/* Contact Details */}
              <div className='space-y-6'>
                <div className='flex items-center gap-4 group'>
                  <div className='w-12 h-12 bg-amber-100/50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                    <FaEnvelope className='text-2xl text-amber-900' />
                  </div>
                  <div>
                    <h3 className='font-semibold text-gray-800'>Email</h3>
                    <p className='text-amber-900'>tizazab752@gmail.com</p>
                  </div>
                </div>

                <div className='flex items-center gap-4 group'>
                  <div className='w-12 h-12 bg-amber-100/50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                    <FaPhone className='text-2xl text-amber-900' />
                  </div>
                  <div>
                    <h3 className='font-semibold text-gray-800'>Phone</h3>
                    <p className='text-amber-900'>+251 913 173 163</p>
                  </div>
                </div>

                <div className='flex items-center gap-4 group'>
                  <div className='w-12 h-12 bg-amber-100/50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                    <FaMapMarkerAlt className='text-2xl text-amber-900' />
                  </div>
                  <div>
                    <h3 className='font-semibold text-gray-800'>Location</h3>
                    <p className='text-amber-900'>Addis.A, Ethiopia</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className='pt-8 border-t border-gray-200'>
                <h3 className='font-semibold text-gray-800 mb-4'>Connect with me</h3>
                <div className='flex gap-4'>
                  {[FaLinkedin, FaGithub, FaTwitter].map((Icon, index) => (
                    <a
                      key={index}
                      href="#"
                      className='w-10 h-10 bg-amber-100/50 rounded-lg flex items-center justify-center hover:scale-110 hover:bg-amber-900 hover:text-white transition-all duration-300'
                    >
                      <Icon className='text-xl' />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className='glass-effect p-8 rounded-2xl border border-amber-100/30 shadow-[0_0_15px_rgba(251,191,36,0.05)] hover:shadow-[0_0_25px_rgba(251,191,36,0.1)] transition-all duration-500'>
            <div className='mb-8'>
              <h3 className='text-2xl font-bold text-gray-800 mb-2'>Send Message</h3>
              <div className='w-20 h-1 bg-gradient-to-r from-amber-900 to-amber-600 rounded-full'></div>
            </div>
            
            <form onSubmit={handleSubmit} className='space-y-8'>
              <div className='grid md:grid-cols-2 gap-6'>
                <div className='group'>
                  <label className='block text-gray-700 mb-2 font-medium group-hover:text-amber-900 transition-colors duration-300'>Name</label>
                  <input
                    type='text'
                    className='w-full px-4 py-3 rounded-lg bg-white/50 border border-amber-900 focus:outline-none focus:border-amber-900 focus:ring-2 focus:ring-amber-900/50 transition-all duration-300 placeholder:text-gray-400'
                    placeholder='John Doe'
                  />
                </div>
                <div className='group'>
                  <label className='block text-gray-700 mb-2 font-medium group-hover:text-amber-900 transition-colors duration-300'>Email</label>
                  <input
                    type='email'
                    className='w-full px-4 py-3 rounded-lg bg-white/50 border border-amber-900 focus:outline-none focus:border-amber-900 focus:ring-2 focus:ring-amber-900/50 transition-all duration-300 placeholder:text-gray-400'
                    placeholder='john@example.com'
                  />
                </div>
              </div>

              <div className='group'>
                <label className='block text-gray-700 mb-2 font-medium group-hover:text-amber-900 transition-colors duration-300'>Subject</label>
                <input
                  type='text'
                  className='w-full px-4 py-3 rounded-lg bg-white/50 border border-amber-900 focus:outline-none focus:border-amber-900 focus:ring-2 focus:ring-amber-900/50 transition-all duration-300 placeholder:text-gray-400'
                  placeholder='Project Discussion'
                />
              </div>

              <div className='group'>
                <label className='block text-gray-700 mb-2 font-medium group-hover:text-amber-900 transition-colors duration-300'>Message</label>
                <textarea
                  rows='5'
                  className='w-full px-4 py-3 rounded-lg bg-white/50 border border-amber-900 focus:outline-none focus:border-amber-900 focus:ring-2 focus:ring-amber-900/50 transition-all duration-300 resize-none placeholder:text-gray-400'
                  placeholder='Your message here...'
                ></textarea>
              </div>

              <button
                type='submit'
                className='w-full py-4 px-8 bg-gradient-to-r from-amber-900 to-amber-800 text-white rounded-lg hover:from-amber-800 hover:to-amber-700 transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300 font-medium relative overflow-hidden group'
              >
                <span className='relative z-10'>Send Message</span>
                <div className='absolute inset-0 bg-gradient-to-r from-amber-800 to-amber-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left'></div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;