import React, { useState, useEffect } from 'react';
import {HashLink} from 'react-router-hash-link';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navMenu = document.querySelector('#nav-menu');

  const handleClick = () => {
    setIsActive(!isActive);
    
    // if (navMenu) {
    //   navMenu.classList.toggle('hidden');
    // }
  };

  const handleScroll = () => {
    const header = document.querySelector('header');
    if (header) {
      const fixedNav = header.offsetTop;
      if (window.pageYOffset > fixedNav) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    }

  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header className={`${isFixed ? 'navbar-fixed' : ''} bg-transparent absolute top-0 left-0 w-full flex items-center z-10`}>
      <div className="container">
        <div className="flex items-center justify-between relative">
          <HashLink to="#home" className="px-4 text-primary font-bold text-lg block py-6">FelixPratamasan</HashLink>

          <div className='flex items-center px-4'>
            <button
              id="hamburger"
              name="hamburger"
              type="button"
              onClick={handleClick}
              className={`${isActive ? 'hamburger-active': ''} block absolute right-4 lg:hidden`}
            >
              <span className='hamburger-line origin-top-left'></span>
              <span className='hamburger-line'></span>
              <span className='hamburger-line origin-bottom-left'></span>
            </button>

            {/* Uncomment if you want to add the nav-menu */}
            <nav id="nav-menu" className={`${isActive ? '': 'hidden'} absolute py-5 bg-white shadow-lg rounded-lg 
              max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none 
              `}>
              <ul className='block lg:flex'>
                {/* <li className='group'>
                  <a href="#" className='text-base text-black py-2 mx-5  flex group-hover:text-primary lg:text-white lg:text-lg'>About</a>
                </li> */}
                <li className='group'>
                  <HashLink to="#techStack" className='link text-base text-black py-2 mx-5  flex group-hover:text-primary lg:text-white lg:text-lg'>Skills</HashLink>
                </li>
                <li className='group'>
                  <HashLink to="#projects" className='text-base text-black py-2 mx-5 flex group-hover:text-primary lg:text-white lg:text-lg'>Projects</HashLink>
                </li>
                <li className='group'>
                  <HashLink to="#Experiences" className='text-base text-black py-2 mx-5  flex group-hover:text-primary lg:text-white lg:text-lg'>Experiences</HashLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
