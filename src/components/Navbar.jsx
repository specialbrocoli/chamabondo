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
    { name: 'gallery', path: '/gallery' },
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
      <header className=' flex items-center justify-between max-w-[1536px] mx-auto px-12 py-4'>
        {/* logo */}
        <div className='w-14 h-14 sm:w-18 sm:h-18'>
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
        <Button className='hidden lg:flex'>
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
