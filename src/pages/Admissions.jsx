import React from "react";
import Banner from "../components/Banner";
import Button from "../components/Button";
import Button2 from "../components/Button2";

const admissionsCardsData = [
  {
    id: 1,
    icon: "/admissions-icon-1.png",
    title: "Birth Certificate",
    description:
      "A certified copy of the child's birth certificate is required.",
  },

  {
    id: 2,
    icon: "/admissions-icon-2.png",
    title: "Previous Report",
    description: "Submit the most recent school report for Grade 1 and above.",
  },
  {
    id: 3,
    icon: "/admissions-icon-3.png",
    title: "Proof of Residence",
    description:
      "Provide a utility bill or letter showing your current address.",
  },

  {
    id: 4,
    icon: "/admissons-icon-4.png",
    title: "Application Form",
    description:
      "Collect and complete an application form from the school office.",
  },
];

const admissionCards = (card) => {
  return (
    <div className=" pb-20 ">
      <div className="bg-white hover:bg-[#b2f8deef]  rounded-lg shadow-[0_12px_35px_rgba(0,0,0,0.15)]  max-w-[297px] h-[260px]  transform transition-all hover:-translate-y-2 duration-300 cursor-pointer  ">
        <div className="text-center p-2 flex  flex-col items-center px-7 pt-4 ">
          <div>
            <img src={card.icon} alt="" />
          </div>
          <h4 className=" font-bold text-[20px]">{card.title}</h4>
          <p className="text-base">{card.description}</p>
        </div>
      </div>
    </div>
  );
};



const testimoniesCardsData = [
  {
    id: 1,
    image: "/testimonials-ellipse-1.png",
    title: "Desire Sibanda",
    subTitle: "Mikkie",
    description:
      " I am grateful for the supportive teachers  and the friendships I made. Chamabondo shaped the way I think, learn, and lead. The lessons I gained from this school continue to guide me in high school. I feel proud .",
  },

  {
    id: 2,
    image: "/testimonials-ellipse-2.png",
    title: "Mikaela Tariro",
    subTitle: "Mikkie",
    description: "  I was taught to dream big and work hard. Chamabondo helped me discover my confidence and passion for learning. The values and discipline I gained there gave me a head start in life. ",
  },
  {
    id: 3,
    image: "/testimonials-ellipse-3.png",
    title: "Clarence Chikwezeze",
    subTitle: "Mikkie",
    description:
      "  Our teachers made us feel seen and capable. At Chamabondo, I learned more than just reading and math. I built leadership skills, made lifelong friends, and developed a strong love for school. ",
  },
];

const testimonyCards = (testimony) => {
  return (
    <div className="bg-white w-96 h-40 rounded-3xl px-4 py-3 mx-2">
      <div class="flex items-center gap-x-6">
        <img
          class="size-16 rounded-full"
          src={testimony.image}
          alt=""
        />
        <div>
          <h3 class="text-[16px] font-bold tracking-tight">{testimony.title}</h3>
          <p class="font-bold text-[10px] ">{testimony.subTitle}</p>
          <div className="flex  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#f6d002"
                d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#f6d002"
                d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#f6d002"
                d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#f6d002"
                d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#f6d002"
                d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div>
        <p className="text-[10px] text-center pt-2">
        {testimony.description}
        </p>
      </div>
    </div>
  );
};



function Admissions() {
  return (
    <main>
      {/*Banner section*/}
    
        <Banner></Banner>
     

      {/*Admissions section*/}
      <section>
        <div className="mt-12 p-4 sm:p-8 lg:p-20  text-center flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-8 mb-6 text-center ">
            Admissions
          </h2>
          <div className="max-w-xl pb-5">
            <p  className="text-[min(10vw, 70vw)] mb-6">
              Chamabondo Primary School welcomes applications from learners of
              all backgrounds who are ready to grow in a vibrant, disciplined,
              and nurturing learning environment. We accept children for ECD A
              to Grade 7, and placements are subject to available space.
            </p>
          </div>

          <Button>Download Application form </Button>
        </div>
      </section>

      {/*Admissions requirements section*/}
      <section>
        <div className="mt-20  lg:mt-20 p-8 container mx-auto max-w-8xl text-center flex flex-col items-center ">
          <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-6 text-center ">
            Admission requirements
          </h2>
          <div className="max-w-xl pb-5">
            <p className="text-[min(10vw, 70vw)] mb-6">
              To enroll your child at Chamabondo Primary School, please ensure
              you provide the following
            </p>
          </div>
        </div>

        {/*Cards*/}

        <div className="flex flex-wrap justify-center gap-4   ">
          {admissionsCardsData.map(admissionCards)}
        </div>
      </section>

      {/*Admissions process section*/}
      <section className="md:h-[100vh] px-4 sm:px-8 lg:px-20">
        <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-10 text-center ">
          Admission process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          {/*Left section*/}
          <div className="relative">
            <div>
              <img
                src="/admission-process-1.jpg"
                alt=""
                className="w-full md:w-[508px] h-auto rounded-4xl"
              />
            </div>

            <div className="md:absolute top-56 left-48 max-lg:static max-lg:mx-auto">
              <img
                src="/admission-process-2.jpg"
                alt=""
                className=" w-full md:w-[508px] h-auto rounded-4xl border-3 border-amber-50"
              />
            </div>
          </div>

          {/*Right section*/}
          <div>
            <div>
              <p className="text-l md:text-xl font-bold mt-18 mb-2 ">
                Over 13k+ Enrolled Students
              </p>
              <div class="flex -space-x-2 overflow-hidden">
                <img
                  class="inline-block size-10 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <img
                  class="inline-block size-10 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <img
                  class="inline-block size-10 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                  alt=""
                />
                <img
                  class="inline-block size-10 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
            </div>

            <div className="pt-18 space-y-10">
              <div className="flex font-bold">
                <span className="mr-6">Step 1</span>{" "}
                <p className="border-b-2 w-[500px] border-gray-200">
                  Collect/Download Application form
                </p>
              </div>

              <div className="flex font-bold">
                <span className="mr-6">Step 2</span>{" "}
                <p className="border-b-2 w-[500px]  border-gray-200">
                  Submit to school office
                </p>
              </div>
              <div className="flex font-bold">
                <span className="mr-6">Step 3</span>{" "}
                <p className="border-b-2 w-[500px]  border-gray-200">
                  Attend the interview/assesment
                </p>
              </div>
              <div className="flex font-bold">
                <span className="mr-6">Step 4</span>{" "}
                <p className="border-b-2 w-[500px]  border-gray-200">
                  Receive the acceptance letter
                </p>
              </div>

              <Button2 >Download application form (pdf)</Button2>
            </div>
          </div>
        </div>
      </section>

      {/*School readiness section*/}
      <section className=" lg:h-[100vh] px-4 sm:px-8 lg:px-20 ">
        <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-10 text-center ">
          School readiness checklist
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 max-lg:grid-cols-1  gap-6  ">
          {/*Left section*/}
          <div className=" w-full  h-auto lg:w-[600px] mt-10   ">
            <div className="flex flex-col items-center  sm:flex-row md:flex md:justify-center  gap-4 max-lg:px-2">
              <div className="">
                <img
                  src="/checklist-1.jpg"
                  alt=""
                  className="  md:w-[260px] md:h-[200px] rounded-3xl mt-7 shadow-[0_12px_35px_rgba(0,0,0,0.20)] transform transition-all hover:-translate-y-2 duration-300 cursor-pointer"
                />
              </div>
              <div className="bg-white rounded-3xl w-full h-[280px] max-md:hidden   md:w-[260px] md:h-[200px] flex justify-center items-center shadow-[0_12px_35px_rgba(0,0,0,0.20)] transform transition-all hover:-translate-y-2 duration-300 cursor-pointer ">
                <img src="/logo.png" alt=""  />
              </div>
            </div>

            <div className="flex flex-col items-center sm:flex-row gap-4 md:flex md:justify-center ">
              <div>
                <img
                  src="/checklist-3.jpg"
                  alt=""
                  className="  md:w-[260px] md:h-[200px] rounded-3xl mt-7 shadow-[0_12px_35px_rgba(0,0,0,0.20)] transform transition-all hover:-translate-y-2 duration-300 cursor-pointer"
                />
              </div>
              <div className="pt-2">
                <img
                  src="/checklist-4.jpg"
                  alt=""
                  className="  md:w-[260px] md:h-[200px] rounded-3xl shadow-[0_12px_35px_rgba(0,0,0,0.20)] transform transition-all hover:-translate-y-2 duration-300 cursor-pointer "
                />
              </div>
            </div>
          </div>

          {/*Right section*/}
          <div>
            <div className="max-lg:text-center md:flex-col md:items-center  ">
              <p className="text-l md:text-xl font-bold mt-10 mb-2 ">
                Checklist for new students
              </p>
              <div >
                <p className="text-[min(10vw, 70vw)] max-lg:px-30 max-sm:px-4 ">
                  To help your child start the school year prepared and
                  confident, please ensure they have all the necessary supplies,
                  documents, and uniform items listed in our student checklist.
                </p>
              </div>
            </div>

            <div className="pt-18 space-y-10">
              <div className="flex font-bold">
                <span className="mr-6">
                  <img src="/shield-tick-icon.png" alt="" />
                </span>{" "}
                <p className="border-b-2 w-[500px] border-gray-200">
                  Toilet trained
                </p>
              </div>

              <div className="flex font-bold">
                <span className="mr-6">
                  <img src="/shield-tick-icon.png" alt="" />
                </span>{" "}
                <p className="border-b-2 w-[500px]  border-gray-200">
                  Can feed themselves
                </p>
              </div>
              <div className="flex font-bold">
                <span className="mr-6">
                  <img src="/shield-tick-icon.png" alt="" />
                </span>{" "}
                <p className="border-b-2 w-[500px]  border-gray-200">
                  Recognizes basic shapes/colors
                </p>
              </div>
              <div className="flex font-bold">
                <span className="mr-6">
                  <img src="/shield-tick-icon.png" alt="" />
                </span>{" "}
                <p className="border-b-2 w-[500px]  border-gray-200">
                  Comfortable being away from home
                </p>
              </div>

              <Button2>Enroll now</Button2>
            </div>
          </div>
        </div>
      </section>

      {/*Testimonials section*/}
      <section >
        <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-10 text-center ">
          Testimonials
        </h2>
        <div className="bg-[url(/testimonials-bg.png)] bg-center bg-no-repeat bg-cover lg:h-[84vh] w-full flex flex-col items-center content-center ">
          <div className="pt-32 text-white text-center  w-full sm:w-3/4 lg:w-1/2  ">
            <h4 className="text-xl sm:text-2xl mb-2 ">Graduated Students Testiomonies</h4>
            <p className=" text-[min(10vw, 70vw)]  sm:text-base mb-4 pb-3">
              The following are testimonials from some of our proud Chamabondo
              Primary School graduates, sharing their experiences and successes
              after completing their education here.
            </p>
          </div>

          {/*Cards*/}
          <div className="flex flex-wrap justify-center gap-4  sm:px-8">
            {testimoniesCardsData.map(testimonyCards)}
          </div>

          <Button className="mt-8 mb-16 sm:mt-16">Become a student</Button>
        </div>
      </section>
    </main>
  );
}

export default Admissions;
