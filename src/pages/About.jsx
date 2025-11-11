import React from 'react';
import BannerImg from '/banner.png';
import { Link } from 'react-router-dom';
import AboutUsImg1 from '/about-us-1.png';
import Button from '../components/Button';
import Banner from '../components/Banner';

function About() {
  return (
    <>
      {/* Banner section with background image */}
      <Banner className='bg-[url("/banner-4.png")]'></Banner>

      {/* About section content */}
      <section className='mt-12 p-2 lg:p-10 lg:mt-40'>
        {/* Section wrapper */}
        <div className='container mx-auto  flex flex-col justify-center gap-8 lg:flex-row'>
          {/* Section description */}
          <div className='flex flex-col items-center justify-center gap-8 flex-1/3 p-4 bg-gray-100 rounded-sm lg:-mt-20 lg:bg-white'>
            <h1 className='font-bold text-center text-xl sm:text-2xl lg:text-3xl'>
              About <br /> Chamabondo Primary School
            </h1>
            <p className='text-center text-sm sm:text-base'>
              We are a leading public school in Victoria Falls, Zimbabwe,
              committed to nurturing confident, creative, and responsible
              learners. Established in 2000, the school has grown into a vibrant
              learning community with over 1,500 pupils and a dedicated team of
              educators. At Chamabondo, we believe in holistic education —
              balancing academic excellence with life skills, environmental
              awareness, and innovation. Our learners benefit from modern
              teaching methods, a smart classroom, arts and ICT programs, and
              award-winning sustainability initiatives like our biogas project
              and recycling club.
            </p>
            <Button className='mx-auto'>
              <Link to='/admissions'>Enroll Now</Link>
            </Button>
          </div>

          {/* Section image one */}
          <div className='rounded-4xl overflow-hidden lg:max-w-[20%] lg:-order-3 lg:rounded-none lg:rounded-tr-4xl lg:rounded-bl-4xl  h-80'>
            <img
              src={AboutUsImg1}
              alt='/'
              className='object-cover h-full w-full'
            />
          </div>

          {/* Section image two */}
          <div className='flex items-center justify-center rounded-4xl overflow-hidden lg:max-w-[20%] lg:rounded-none lg:rounded-tl-4xl lg:rounded-br-4xl h-80'>
            <img
              src={BannerImg}
              alt='/'
              className='object-cover h-full w-full'
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
