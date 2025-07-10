import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const Banner = ({ className = '' }) => {
  return (
    <section className='p-2 lg:p-0'>
      {/* Banner container */}
      <div className='rounded-xl overflow-hidden lg:rounded-none lg:rounded-t-xl lg:rounded-tr-xl'>
        {/* Banner background and content */}
        <div
          className={`h-[90vh] bg-[url("/banner-2.png")] bg-cover bg-center flex items-end justify-center relative after:absolute after:inset-0 after:bg-gradient-to-t after:from-black after:via-transparent after:to-transparent ${className}`}
        >
          {/* Section button */}
          <div>
            <Button className='-mt-25 z-10'>
              <Link to='/admissions'>Apply Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
