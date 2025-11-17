import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='font-semibold text-3xl text-center my-12'>
        Oops page not found :(
      </h1>
      <button className='bg-[#005637] text-white px-4 py-2 rounded text-xl w-full max-w-[768px] text-center'>
        <Link to='/' className='block'>
          Return to home
        </Link>
      </button>
    </div>
  );
};

export default NotFound;
