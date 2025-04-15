import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaCode } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='w-full'>
      <div className='max-w-7xl mx-auto px-4 py-8'>
        <div className='flex flex-col items-center space-y-6'>
          {/* Logo/Brand */}
          <div className='flex items-center gap-2 text-2xl font-bold text-gray-800 hover:scale-110 transition-transform duration-300'>
            <FaCode className='text-amber-900' />
            <a href="#home"><span className='hover:scale-125 hover:text-amber-950'>Tizazab</span></a>
          </div>

          {/* Social Links */}
          <div className='flex gap-6'>
            {[
              { icon: FaGithub, link: '#' },
              { icon: FaLinkedin, link: '#' },
              { icon: FaTwitter, link: '#' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                className='text-gray-600 hover:text-amber-900 transform hover:-translate-y-1 hover:scale-110 transition-all duration-300'
              >
                <social.icon className='text-xl' />
              </a>
            ))}
          </div>

          {/* Unique Separator */}
          <div className='w-24 h-[2px] bg-gradient-to-r from-transparent via-amber-900 to-transparent'></div>

          {/* Copyright */}
          <p className='text-gray-600 text-sm'>
            © {new Date().getFullYear()} | Crafted with precision
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;