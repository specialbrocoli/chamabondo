import React from 'react';
import BannerImg from '/banner.png';
import MissionImg1 from '/mission-1.png';
import MissionImg2 from '/mission-2.png';
import { Link } from 'react-router-dom';
import AboutUsImg1 from '/about-us-1.png';
import Button from '../components/Button';
import Banner from '../components/Banner';

function About() {
  return (
    <>
      {/* Banner section */}
      <Banner className='bg-[url("/banner-4.png")]'></Banner>

      {/* About section */}
      <section className='container mx-auto'>
        {/* Section container */}
        <div className='mt-12 p-2 lg:p-10 lg:mt-40 flex flex-col justify-center gap-8 lg:flex-row'>
          {/* Section description container */}
          <div className='flex flex-col items-center justify-center gap-8 flex-1/3 p-6 bg-gray-100 rounded-sm lg:-mt-20 lg:bg-white lg:h-80'>
            {/* Section title */}
            <h1 className='font-bold text-center text-2xl lg:text-3xl 2xl:text-4xl'>
              About <br /> Chamabondo Primary School
            </h1>
            {/* Section description */}
            <p className='text-center text-base 2xl:text-lg'>
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
            {/* Section CTA button  */}
            <Button className='mx-auto'>
              <Link to='/admissions'>Enroll Now</Link>
            </Button>
          </div>

          {/* Section image wrapper one */}
          <div className='rounded-4xl overflow-hidden lg:max-w-[20%] lg:-order-3 lg:rounded-none lg:rounded-tr-4xl lg:rounded-bl-4xl h-80 flex items-center'>
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

      {/* Mission section */}
      <section className='mt-12 p-2 lg:p-10 lg:mt-0'>
        {/* Section container */}
        <div className='container mx-auto bg-gray-100 rounded-sm p-8 lg:p-16 lg:bg-white'>
          <h2 className='font-bold text-2xl text-center lg:text-3xl 2xl:text-4xl'>
            Our mission
          </h2>
          <div className='lg:flex lg:items-center lg:justify-center my-auto lg:gap-8 mt-4 lg:mt-12'>
            {/* Section description */}
            <p className='text-center text-base lg:max-w-[60%] first-letter:font-bold first-letter:text-2xl lg:text-left 2xl:text-lg'>
              Our mission is to provide quality education that empowers every
              learner to achieve academic excellence, develop strong values, and
              grow into responsible, innovative citizens. We commit to fostering
              a safe, inclusive environment that encourages creativity,
              collaboration, and lifelong learning. Our mission is to provide
              quality education that empowers every learner to achieve academic
              excellence, develop strong values, and grow into responsible,
              innovative citizens. We commit to building bright futures through
              dedication, care, and integrity.
            </p>
            {/* Section images*/}
            <div className='flex gap-4 h-60 mt-8 lg:h-64 lg:-order-1'>
              <img
                src={MissionImg1}
                alt='mission image 1'
                className='flex-1 h-full rounded-lg object-cover min-w-0'
              />
              <img
                src={MissionImg2}
                alt='mission image 2'
                className='flex-1 h-full rounded-lg object-cover min-w-0'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision section */}
      <section className='p-2 lg:p-10'>
        {/* Section container */}
        <div className='bg-gray-100 rounded-sm p-8 lg:p-16 mt-12 lg:bg-white container mx-auto lg:-mt-4'>
          <h2 className='font-bold text-2xl text-center lg:text-3xl 2xl:text-4xl'>
            Our vision
          </h2>
          <div className='lg:flex lg:gap-4 lg:mt-12 lg:items-center lg:justify-center'>
            <p className='text-center text-base first-letter:font-bold first-letter:text-2xl lg:text-left 2xl:text-lg mt-4 lg:flex-1'>
              Our vision is to become a centre of educational excellence that
              inspires learners to reach their full potential through
              innovation, discipline, and lifelong learning. We aim to create a
              nurturing and inclusive environment where every child feels
              valued, supported, and empowered to succeed. Our vision is to
              become a centre of educational excellence that inspires learners
              to reach their full potential through innovation, discipline, and
              lifelong learning. We aim to shape responsible future leaders with
              strong values and creative minds. Our vision is to provide quality
              education that transforms lives and communities through knowledge,
              character, and purpose.
            </p>

            {/* Section images */}
            <div className='flex h-60 gap-4 mt-8 lg:mt-12 lg:h-64 lg:flex-1'>
              <img
                src='/vision.png'
                alt=''
                className='h-full object-cover min-w-0 flex-1 rounded-2xl'
              />
              <img
                src='/vision-1.png'
                alt=''
                className='h-full object-cover min-w-0 flex-1 rounded-2xl border-4 border-white -ml-14'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values section */}
      <section className='p-2 lg:p-10'>
        {/* Section container */}
        <div className='bg-gray-100 rounded-sm p-8 lg:p-16 mt-12 lg:bg-white max-w-[1400px] mx-auto lg:-mt-4'>
          <h2 className='font-bold text-2xl text-center lg:text-3xl 2xl:text-4xl'>
            Our core values
          </h2>
          {/* Section description container */}
          <div className='lg:flex lg:gap-4 lg:mt-12 lg:items-center lg:justify-between'>
            <p className='text-center text-base first-letter:font-bold first-letter:text-2xl lg:text-left 2xl:text-lg lg:text-[20px] lg:max-w-[65ch]'>
              We believe in integrity, respect, accountability, and teamwork. We
              foster honesty, empathy, and transparency while encouraging a
              spirit of responsibility and innovation. Our learners are taught
              to value discipline, hard work, and compassion. These values shape
              their character and future. Our core values guide everything we do
              as a learning community. We believe in integrity, respect,
              accountability, and teamwork. Our goal is to empower learners with
              strong moral foundations and a commitment to excellence.
            </p>

            {/* Section images */}
            <div className='lg:relative lg:-order-1 h-full w-full'>
              <img
                src='/values.png'
                alt=''
                className='mt-6 rounded-[64px] w-full h-80 object-cover lg:max-w-sm'
              />
            </div>
            <div className='lg:absolute lg:ml-46 flex justify-between items-center h-60 gap-4 mt-8 lg:mt-12 lg:h-64 lg:flex-col'>
              <div className='h-full  w-[48%] rounded-[64px] overflow-hidden lg:border-4 lg:border-[#fff] lg:shadow-2xl'>
                <img
                  src='/vision.png'
                  alt=''
                  className='object-cover h-full w-full'
                />
              </div>
              <div className='flex items-center justify-center bg-white rounded-[64px] overflow-hidden h-full w-[48%] lg:shadow-2xl'>
                <img src='/logo.png' alt='' className='object-cover' />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Headmster section */}
      <section className='mt-12'>
        <h2 className='font-bold text-center m-4 lg:text-3xl 2xl:text-4xl'>
          Message from the Headmaster
        </h2>

        {/* Section container */}
        <div className='container mx-auto px-4 sm:flex items-start justify-center gap-6 lg:gap-8'>
          {/* Headmaster headshot */}
          <div className='flex-1 max-w-sm mx-auto sm:mx-0'>
            <img
              src='/headmaster.png'
              alt='Headmaster portrait'
              className='w-full h-auto object-cover rounded-lg max-h-80'
            />
          </div>

          <div className='flex-1 flex flex-col justify-center p-4 lg:p-6'>
            <p className='text-center text-base first-letter:font-bold first-letter:text-2xl lg:text-left 2xl:text-lg mb-6'>
              At Chamabondo Primary School, we are committed to providing a
              holistic and empowering education that prepares every learner for
              success. We take pride in our staff, vibrant learners, and strong
              community support that continue to shape our school's growth. Our
              mission is to inspire, nurture, and equip children with knowledge,
              creativity, and values. At Chamabondo Primary we are committed to
              providing a holistic and empowering education that prepares every
              learner for success. We strive to create a future built on
              excellence, unity, and purpose. At Chamabondo Primary, we believe
              in every child's ability to shine and lead.
            </p>
            <Button className='mx-auto lg:mx-0 max-w-fit'>
              Visit our school
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
