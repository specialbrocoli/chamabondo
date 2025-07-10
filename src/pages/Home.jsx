import React from 'react';
import heroImageOne from '/hero-1.png';
import heroImageTwo from '/hero-2.png';
import AboutImageOne from '/about-1.png';
import AboutImageTwo from '/about-2.png';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Cards from '../components/Cards';
import TestimonialsImageOne from '/testimonials-1.png';
import TestimonialsImageTwo from '/testimonials-2.png';
import TestimonialsImageThree from '/testimonials-3.png';
import cardsData from '../components/cardsData';

const Home = () => {
  function createCards(data) {
    return (
      <Cards
        key={data.id}
        image={data.ImgURL}
        icon={data.icon}
        title={data.title}
        description={data.description}
      />
    );
  }

  return (
    <main>
      {/* Hero section */}

      <section className='container w-full mt-12 sm:mx-auto sm:w-xl md:w-3xl lg:-mt-2 xl:w-6xl'>
        {/* Hero decription */}
        <div className='flex flex-col items-center justify-center p-6 md:w-xl md:mx-auto'>
          <h1 className='text-3xl leading-snug font-black text-center mb-4 lg:text-4xl max-[475px]:text-2xl'>
            Putting your child's <br /> future in great motion
          </h1>
          <p className='text-base text-center mb-6 lg:text-lg xl:text-xl max-[475px]:text-sm'>
            At Chamabondo, we nurture young minds with innovation, discipline,
            and a love for learning — preparing every child to thrive in a
            changing world.
          </p>
          <Button>
            <Link to='/admissions'>Enroll Now</Link>
          </Button>
        </div>

        {/* Hero img wrapper */}
        <div className='flex flex-col items-center justify-center md:flex-row'>
          <div className='p-4'>
            <img
              src={heroImageOne}
              alt='hero image 1'
              className='object-cover'
            />
          </div>

          <div className='p-4'>
            <img
              src={heroImageTwo}
              alt='hero image 2'
              className='object-cover'
            />
          </div>
        </div>
      </section>

      {/* Welcome section */}
      <section className='py-20 px-6'>
        <div className='container mx-auto max-w-8xl text-center flex flex-col items-center'>
          {/* Welcome heading */}
          <div className='mb-6 text-center max-w-xl'>
            <h1 className='text-2xl xl:text-3xl font-bold mb-1 2xl:text-4xl'>
              Welcome to Chamabondo <br /> Primary School
            </h1>
          </div>

          {/* Welcome description */}
          <div className='max-w-xl'>
            <p className='text-base lg:text-lg mb-10 leading-relaxed text-center 2xl:text-xl'>
              Welcome to Chamabondo, a centre of excellence, innovation, and
              community spirit - shaping confident, responsible future leaders.
            </p>
          </div>

          {/* Apply Button */}

          <Button>
            <Link to='/admissions'>Apply Now</Link>
          </Button>
          <div className='mt-12 relative max-w-8xl'>
            <img
              src='/banner-2.png'
              alt='happy children at school'
              className='rounded-b-4xl  '
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent  to-transparent rounded-b-4xl'></div>
          </div>
        </div>
      </section>

      {/* About us section */}
      <section className='container mx-auto mt-2'>
        <h1 className='text-2xl lg:text-3xl font-bold text-center 2xl:text-4xl'>
          About us
        </h1>
        {/* Section content wrapper */}
        <div className='flex flex-col xl:flex-row mt-12'>
          {/* Left section */}
          <div className='flex-1/2 p-6'>
            <h2 className='font-semibold text-xl mb-6 lg:text-2xl 2xl:text-3xl'>
              <span>“</span>Who we are<span>”</span>
            </h2>
            <p className='text-[min(10vw, 70vw)] text-left mb-6'>
              Who we are at Chamabondo Primary School is rooted in excellence,
              care, and innovation. Located in Victoria Falls, we strive to
              provide a well-rounded education that prepares learners for a
              brighter tomorrow. Our mission is to nurture confident, capable
              individuals through academic rigor, creativity, and a strong moral
              foundation. With dedicated staff and a dynamic learning
              environment, we believe every child has the potential to lead,
              create, and grow. Our vision is to empower students with the
              knowledge, values, and skills to make a difference in their
              communities and the world
            </p>
            <Button>
              <Link to='/about'>About us</Link>
            </Button>
          </div>

          {/* Right section */}
          <div className='flex flex-1/2 mt-30 md:mt-14'>
            <div className='sm:w-96 max-sm:max-w-max mx-auto sm:absolute'>
              <img src={AboutImageOne} alt='about image 1' />
            </div>

            <div className='relative h-full sm:-top-20 sm:-right-55 md:-top-1/5 md:-right-1/4 max-sm:hidden'>
              <img src={AboutImageTwo} alt='about image 2' />
            </div>
          </div>
        </div>
      </section>

      {/*Why choose section*/}
      <section>
        <div className='mt-20 lg:mt-40 p-8'>
          <h2 className='text-2xl font-bold mt-8 mb-7 text-center pb-7 lg:text-3xl 2xl:text-4xl'>
            Why choose us
          </h2>

          <div className='flex max-lg:flex-wrap justify-center'>
            {cardsData.map(createCards)}
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <section className='container mx-auto mt-20 md:mt-25'>
        <h1 className='text-2xl font-bold text-center lg:text-3xl 2xl:text-4xl'>Testimonials</h1>

        <h2 className='text-lg font-semibold text-center mt-0.5 lg:text-xl 2xl:text-2xl'>
          What the parents <br /> say about us
        </h2>

        {/* Section content wrapper */}
        <div className='container flex items-start justify-center mt-16 max-lg:flex-col'>
          {/* Left section */}
          <div className='p-8 flex-1/2 mt-3 mb-6'>
            <p className='font-normal text-base md:text-lg text-left'>
              Chamabondo Primary has truly changed our child's life. The
              teachers are caring the environment is safe, and the learning is
              incredible. we've seen so much growth — both academically and
              socially. We're proud to part of this school community.
            </p>

            <Button className='text-base mt-12 max-lg:mx-auto'>
              <Link to='/about'>Read more</Link>
            </Button>
          </div>

          {/* Right section */}
          <div className='flex gap-8 justify-center items-center flex-1/2 p-10'>
            <div className=''>
              <img src={TestimonialsImageOne} alt='' />
            </div>
            <div className='flex flex-col gap-4'>
              <div className=''>
                <img src={TestimonialsImageTwo} alt='testimonials' />
              </div>
              <div className=''>
                <img src={TestimonialsImageThree} alt='testimonials' />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter section */}
      <section className='py-20 px-6 sm:px-20 h-[90vh]'>
        <div className="bg-gray-800 bg-[url('/sign-up.jpg')] bg-blend-overlay bg-center bg-no-repeat bg-cover w-full h-full rounded-3xl flex items-center justify-center">
          {/* Section content wrapper */}
          <div className='flex flex-col items-center justify-center text-center space-y-6'>
            <h2 className='text-white text-2xl sm:text-3xl font-medium'>
              Sign up for updates and news
            </h2>

            <form
              action='submit'
              className='flex flex-col lg:flex-row gap-4 items-center justify-center'
            >
              <input
                type='email'
                placeholder='Email'
                className='px-4 py-2 rounded-3xl w-72 sm:w-96 focus:outline-none bg-white text-black italic '
              />

              <Button>Sign Up</Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
