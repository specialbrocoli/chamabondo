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
        <div className="mt-20 lg:mt-20 p-8 container mx-auto max-w-8xl text-center flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-7 text-center pb-7">
            Admissions
          </h2>
          <div className="max-w-xl pb-5">
            <p>
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
      <section></section>
    </main>
  );
}

export default Admissions;
