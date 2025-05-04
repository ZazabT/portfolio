import {useState} from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { toast } from 'sonner';
import { FaSpinner } from 'react-icons/fa';
const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Set loading state to true
      setIsLoading(true);
      const formData = new FormData(e.target);
      
      // Use the correct Vite environment variable prefix
      formData.append('access_key', import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
      
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        toast.success('Message sent successfully!', {
          duration: 5000,
          position: 'top-right',
          icon: '✅',
          style: {
            background: '#f3f4f6',
            color: '#78350f',
          },
        });
        e.target.reset();
      } else {
        toast.error(data.message || 'Failed to send message', {
          duration: 5000,
          position: 'top-right',
          icon: '❌',
          style: {
            background: '#f3f4f6',
            color: '#78350f',
          },
        });
      }
    } catch (error) {
      toast.error('Network error. Please try again later.', {
        duration: 5000,
        position: 'top-right',
        icon: '⚠️',
        style: {
          background: '#f3f4f6',
          color: '#78350f',
        },
      });
      console.error('Form submission error:', error);
    }finally {
      // Set loading state to false after the request is complete
      setIsLoading(false); 
    }
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
            <div className='glass-effect p-8 rounded-2xl space-y-8'>
              {/* Contact Details */}
              <div className='space-y-6'>
                <div className='flex items-center gap-4 group'>
                  <div className='w-12 h-12  rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                    <FaEnvelope className='text-2xl text-amber-900' />
                  </div>
                  <div>
                    <h3 className='font-semibold text-gray-800'>Email</h3>
                    <p className='text-amber-900'>tizazab752@gmail.com</p>
                  </div>
                </div>

                <div className='flex items-center gap-4 group'>
                  <div className='w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
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
          <div className='glass-effect p-8 rounded-2xl transition-all duration-500'>
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
                    name='name'
                    required
                  />
                </div>
                <div className='group'>
                  <label className='block text-gray-700 mb-2 font-medium group-hover:text-amber-900 transition-colors duration-300'>Email</label>
                  <input
                    type='email'
                    className='w-full px-4 py-3 rounded-lg bg-white/50 border border-amber-900 focus:outline-none focus:border-amber-900 focus:ring-2 focus:ring-amber-900/50 transition-all duration-300 placeholder:text-gray-400'
                    placeholder='john@example.com'
                    name='email'
                    required
                  />
                </div>
              </div>

              <div className='group'>
                <label className='block text-gray-700 mb-2 font-medium group-hover:text-amber-900 transition-colors duration-300'>Subject</label>
                <input
                  type='text'
                  className='w-full px-4 py-3 rounded-lg bg-white/50 border border-amber-900 focus:outline-none focus:border-amber-900 focus:ring-2 focus:ring-amber-900/50 transition-all duration-300 placeholder:text-gray-400'
                  placeholder='Project Discussion'
                  name='subject'
                  required
                />
              </div>

              <div className='group'>
                <label className='block text-gray-700 mb-2 font-medium group-hover:text-amber-900 transition-colors duration-300'>Message</label>
                <textarea
                  rows='5'
                  className='w-full px-4 py-3 rounded-lg bg-white/50 border border-amber-900 focus:outline-none focus:border-amber-900 focus:ring-2 focus:ring-amber-900/50 transition-all duration-300 resize-none placeholder:text-gray-400'
                  placeholder='Your message here...'
                  name='message'
                  required
                ></textarea>
              </div>

              <button
                type='submit'
                disabled={isLoading}
                className='w-full py-4 px-8 bg-gradient-to-r from-amber-900 to-amber-800 text-white rounded-lg hover:from-amber-800 hover:to-amber-700 transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300 font-medium relative overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed'
              >
                <span className='relative z-10 flex items-center justify-center gap-2'>
                  {isLoading ? (
                    <>
                      <FaSpinner className="animate-spin text-xl" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </span>
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