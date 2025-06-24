import React, { Component } from 'react';
import Button from './Button';
import Logo from '/logo.png';
import { Link } from 'react-router';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

class Navbar extends Component {
  state = {
    menu: [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
      { name: 'Admissions', path: '/admissions' },
      { name: 'Calender', path: '/calender' },
      { name: 'gallery', path: '/gallery' },
      { name: 'Projects', path: '/projects' },
      { name: 'Contact us', path: '/contact' },
    ],

    nav: false,
  };

  handleNav = () => {
    this.setState({ nav: !this.state.nav });
  };

  render() {
    return (
      <nav>
        <header className=' flex items-center justify-between max-w-[1536px] mx-auto px-12 py-4'>
          {/* logo */}
          <a href='#' className='w-14 h-14 sm:w-18 sm:h-18'>
            <Link to='/'>
              <img src={Logo} alt='school logo' className='object-contain' />
            </Link>
          </a>
          {/* Menu */}
          <ul className='hidden items-center justify-center lg:flex'>
            {/* menu links */}
            {this.state.menu.map((item) => (
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
          <button
            onClick={this.handleNav}
            className='block cursor-pointer lg:hidden'
          >
            {!this.state.nav ? <AiOutlineMenu size={22} /> : <AiOutlineClose />}
          </button>
        </header>
      </nav>
    );
  }
}

export default Navbar;
