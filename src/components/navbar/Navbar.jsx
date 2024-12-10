import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Logo from '../../assets/Logo.png';

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: '-100%' },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="">
      <nav className="bg-[#121618] relative z-10">
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* Logo */}
          <img src={Logo} alt="Logo" className="w-12 h-auto" /> 

          {/* Hamburger menu for mobile */}
          <button
            className="text-white md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)} 
          >
            {/* Simple hamburger icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Desktop Navigation Links */}
          <div className="ml-auto hidden mr-24 md:flex">
            <p className="text-white mr-8 hover:text-[#0796EF]">HOME</p>
            <p className="text-white mr-8 hover:text-[#0796EF]">MENU</p>
            <p className="text-white mr-8 hover:text-[#0796EF]">MAKE A RESERVATION</p>
            <p className="text-white hover:text-[#0796EF]">CONTACT US</p>
          </div>
        </div>

        {/* Mobile Menu with Animation */}
        <motion.div
          className={`md:hidden bg-[#121618] fixed top-0 left-0 w-full h-screen flex flex-col items-start p-8 transition-transform duration-300 ${isOpen ? 'block' : 'hidden'}`}
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          variants={variants}
        >
          <button
            className="text-white mb-8"
            onClick={() => setIsOpen(false)}
          >
            {/* Close button */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Mobile Navigation Links */}
          <p className="text-white mb-8 hover:text-[#0796EF]" onClick={() => setIsOpen(false)}>HOME</p>
          <p className="text-white mb-8 hover:text-[#0796EF]" onClick={() => setIsOpen(false)}>MENU</p>
          <p className="text-white mb-8 hover:text-[#0796EF]" onClick={() => setIsOpen(false)}>MAKE A RESERVATION</p>
          <p className="text-white hover:text-[#0796EF]" onClick={() => setIsOpen(false)}>CONTACT US</p>
        </motion.div>
      </nav>
    </header>
  );
};

export default Navbar;
