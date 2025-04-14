import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed right-0 top-0 w-full backdrop-blur-md z-50'>

      <div className='max-w-7xl mx-auto h-[80px] flex justify-between items-center px-4 text-gray-300'>
        {/* LOGO */}
        <div className='hover:scale-125 hover:-rotate-6 transition-transform duration-700  '>
          <h1 className='font-bold text-3xl text-black hover:text-amber-900'>Tizazab.</h1>
        </div>

        {/* menu */}
        <ul className='hidden md:flex items-center gap-2'>
          <li className='px-4 py-2 font-medium cursor-pointer text-gray-800 hover:text-amber-900 relative group'>
            <span className='duration-700'>Home</span>
            <span className='absolute bottom-0 left-0 w-full h-0.5 bg-amber-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></span>
          </li>
          <li className='px-4 py-2 font-medium cursor-pointer text-gray-800 hover:text-amber-900 relative group'>
            <span className='duration-700'>About</span>
            <span className='absolute bottom-0 left-0 w-full h-0.5 bg-amber-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></span>
          </li>
          <li className='px-4 py-2 font-medium cursor-pointer text-gray-800 hover:text-amber-900 relative group'>
            <span className='duration-700'>Skills</span>
            <span className='absolute bottom-0 left-0 w-full h-0.5 bg-amber-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></span>
          </li>
          <li className='px-4 py-2 font-medium cursor-pointer text-gray-800 hover:text-amber-900 relative group'>
            <span className='duration-700'>Projects</span>
            <span className='absolute bottom-0 left-0 w-full h-0.5 bg-amber-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></span>
          </li>
          <li className='px-4 py-2 font-medium cursor-pointer text-gray-800 hover:text-amber-900 relative group'>
            <span className='duration-700'>Contact</span>
            <span className='absolute bottom-0 left-0 w-full h-0.5 bg-amber-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></span>
          </li>
        </ul>

        {/* hamburger */}
        <div onClick={handleClick} className='md:hidden z-10 cursor-pointer text-2xl text-black'>
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
          <li className='py-6 text-4xl cursor-pointer hover:text-[#64ffda] duration-300'>Home</li>
          <li className='py-6 text-4xl cursor-pointer hover:text-[#64ffda] duration-300'>About</li>
          <li className='py-6 text-4xl cursor-pointer hover:text-[#64ffda] duration-300'>Skills</li>
          <li className='py-6 text-4xl cursor-pointer hover:text-[#64ffda] duration-300'>Projects</li>
          <li className='py-6 text-4xl cursor-pointer hover:text-[#64ffda] duration-300'>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;