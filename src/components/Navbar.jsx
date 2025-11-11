import React, { useState } from 'react';
import Button from './Button';
import Logo from '/logo.png';
import { Link } from 'react-router';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Calender', path: '/calender' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact us', path: '/contact' },
    { name: 'Admissions', path: '/admissions' },
  ];

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav>
      <header className=' flex items-center justify-between max-w-[1536px] mx-auto  px-3 py-4 md:px-10'>
        {/* logo */}
        <div className='w-14 h-14 sm:w-18 sm:h-18 motion-scale-in-[0.5] motion-translate-x-in-[-120%] motion-translate-y-in-[-60%] motion-opacity-in-[33%] motion-rotate-in-[-1080deg] motion-blur-in-[10px] motion-delay-[0.38s]/scale motion-duration-[0.38s]/opacity motion-duration-[1.20s]/rotate motion-duration-[0.15s]/blur motion-delay-[0.60s]/blur motion-ease-spring-bouncier'>
          <Link to='/'>
            <img src={Logo} alt='school logo' className='object-contain' />
          </Link>
        </div>

        {/* Menu */}
        <ul className='hidden items-center justify-center lg:flex'>
          {/* menu links */}
          {navLinks.map((item) => (
            <li
              key={item.name}
              className='p-4 font-normal cursor-pointer hover:underline underline-offset-8 decoration-2 decoration-[#005637]'
            >
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>

        {/* Enroll now btn */}
        <Button className='hidden lg:flex motion-scale-in-[0.5] motion-translate-x-in-[-120%] motion-translate-y-in-[-60%] motion-opacity-in-[33%] motion-rotate-in-[-1080deg] motion-blur-in-[10px] motion-delay-[0.38s]/scale motion-duration-[0.38s]/opacity motion-duration-[1.20s]/rotate motion-duration-[0.15s]/blur motion-delay-[0.60s]/blur motion-ease-spring-bouncier'>
          <Link to='/admissions'>Enroll Now</Link>
        </Button>

        {/* Menu bars */}
        <button onClick={handleNav} className='block cursor-pointer lg:hidden'>
          {!nav ? <AiOutlineMenu size={22} /> : <AiOutlineClose />}
        </button>
      </header>
    </nav>
  );
};

export default Navbar;
