import React from "react";
import Banner from "../components/Banner";
import Button from "../components/Button";
import Button2 from "../components/Button2";

function Projects() {
  return (
    <main>
      <Banner/>
      {/*Projects section*/}
      <section>
        <div className="mt-12 p-4 sm:p-8 lg:p-20  text-center flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-8 mb-6 text-center ">
            Projects
          </h2>
          <div className="max-w-xl pb-5">
            <p className="text-[min(10vw, 70vw)] mb-6">
              Chamabondo learners engage in hands-on projects that spark
              creativity and build confidence. From science experiments to art
              displays, each task nurtures critical thinking and teamwork. These
              projects help students explore real-world skills, making learning
              both exciting and meaningful in every class.
            </p>
          </div>
        </div>
        {/*Cards section*/}
        <div className="px-4 sm:px-8 lg:px-20 intersect:motion-preset-expand motion-duration-2000 intersect-half">
          <div className="grid grid-cols-1 sm:grid-cols-2 ">
            <div className="">
              <img
                src="/projects-1.jpg"
                alt=""
                className=" h-full w-full lg:h-[50vh] rounded-tl-2xl object-cover"
              />
            </div>
            <div className="bg-[#06402b] lg:h-[50vh] w-full rounded-tr-2xl flex flex-col justify-center items-center text-white ">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="#fff"
                    d="M13.5 6.5a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0M16 2a4.5 4.5 0 0 0-4.323 5.753L7.074 6.168a3.073 3.073 0 0 0-2 5.81L11 14.02v3.758a1 1 0 0 1-.101.439L7.307 25.58a3.073 3.073 0 0 0 5.524 2.694l1.46-2.995A9 9 0 0 1 14 23c0-.777.099-1.532.284-2.251q-.045.075-.084.155l-3.167 6.493a1.073 1.073 0 1 1-1.928-.94l3.591-7.364A3 3 0 0 0 13 17.778v-4.115a1.5 1.5 0 0 0-1.012-1.418l-6.264-2.157a1.073 1.073 0 1 1 .699-2.029l7.624 2.626a6 6 0 0 0 3.906 0l7.624-2.626a1.073 1.073 0 1 1 .699 2.029l-6.264 2.157A1.5 1.5 0 0 0 19 13.663v1.272a9 9 0 0 1 2-.712v-.203l5.927-2.041a3.073 3.073 0 0 0-2-5.81l-4.604 1.584A4.504 4.504 0 0 0 16 2m7 13.5a7.5 7.5 0 1 1 0 15a7.5 7.5 0 0 1 0-15m4.53 4.72a.75.75 0 0 0-1.06 0l-4.72 4.72l-1.97-1.97a.75.75 0 1 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l5.25-5.25a.75.75 0 0 0 0-1.06"
                    stroke-width="0.4"
                    stroke="#fff"
                  />
                </svg>
                <span className="font-bold text-4xl ">50+</span>
              </div>
              <h3 className="font-bold text-2xl mt-2">Completed</h3>
              <p className="px-4 sm:px-20 md:px-28 lg:px-40 text-center">
                completed projects in gardening, recylcing, science models,
                murals, quizzes, and more. Those efforts inspire creativity,
                teamwork, and hands-on learning for all.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 ">
            <div className="bg-[#06402b] lg:h-[50vh] w-full rounded-bl-2xl flex flex-col justify-center items-center text-white ">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="#fff"
                    d="M7.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM6 9.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M7.5 11a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm-5-9A1.5 1.5 0 0 0 2 4.915V12a3 3 0 0 0 3 3h4.5v2h-3a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-3v-2H15a3 3 0 0 0 3-3V4.915A1.5 1.5 0 0 0 17.5 2zM3 12V5h14v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2"
                    stroke-width="0.5"
                    stroke="#fff"
                  />
                </svg>
                <span className="font-bold text-4xl">13</span>
              </div>
              <h3 className="font-bold text-2xl mt-2">Ongoing</h3>
              <p className="px-4 sm:px-20 md:px-28 lg:px-40 text-center">
                completed projects in gardening, recylcing, science models,
                murals, quizzes, and more. Those efforts inspire creativity,
                teamwork, and hands-on learning for all.
              </p>
            </div>
            <div className="">
              <img
                src="/projects-2.jpg"
                alt=""
                className="w-full h-full lg:h-[50vh] rounded-br-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/*Project goals and visons section*/}
      <section className=" lg:h-[100vh] px-4 sm:px-8 lg:px-20 container ">
        <div className="mt-20 p-4 sm:p-8 lg:p-10  text-center flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-8 mb-6 text-center ">
            Project Goals and Visions
          </h2>
          <div className="max-w-xl ">
            <p className="text-[min(10vw, 70vw)] ">
              Chamabondo learners engage in hands-on projects that spark
              creativity and build confidence. From science experiments to art
              displays, each task nurtures critical thinking and creativity.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-6  ">
          {/*Left section*/}
          <div>
            <div className=" md:flex-col md:items-center  ">
              <p className="text-lg md:text-xl font-bold  mb-2 text-center ">
                Goals
              </p>
            </div>

            <div className="pt-18 space-y-10">
              <div className="flex items-start  max-sm:flex-col font-bold">
                <span className="mr-6 mb-2 sm:mb-0">
                  <img src="/shield-tick-icon.png" alt="" />
                </span>{" "}
                <p className="border-b-2 w-full sm:w-[500px] border-gray-200">
                  Holistic development
                </p>
              </div>

              <div className="flex  items-start font-bold max-sm:flex-col">
                <span className="mr-6 mb-2 sm:mb-0">
                  <img src="/shield-tick-icon.png" alt="" />
                </span>{" "}
                <p className="border-b-2 w-full sm:w-[500px]  border-gray-200">
                  Academic Excellence
                </p>
              </div>
              <div className="flex items-start max-sm:flex-col font-bold">
                <span className="mr-6 mb-2 sm:mb-0">
                  <img src="/shield-tick-icon.png" alt="" />
                </span>{" "}
                <p className="border-b-2 w-full sm:w-[500px]  border-gray-200">
                  Community Engagement
                </p>
              </div>
              <div className="flex items-start max-sm:flex-col font-bold">
                <span className="mr-6 mb-2 sm:mb-0">
                  <img src="/shield-tick-icon.png" alt="" />
                </span>{" "}
                <p className="border-b-2 w-full sm:w-[500px]  border-gray-200">
                  Innovation and Sustainability
                </p>
              </div>
            </div>
          </div>

          {/*Right section*/}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div>
              <img
                src="projects-goals.jpg"
                alt=""
                className="w-full h-full rounded-4xl shadow-[0_12px_35px_rgba(0,0,0,0.14)]  transform transition-all hover:-translate-y-2 duration-300 cursor-pointer"
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className=" p-4 flex flex-col items-center justify-center text-center bg-white rounded-4xl sm:h-1/2 h-full w-full shadow-[0_12px_35px_rgba(0,0,0,0.14)] transform transition-all hover:-translate-y-2 duration-300 cursor-pointer">
                <h3 className="font-bold pb-2 w-40">
                  Dedicated Students in doing their projects
                </h3>
                <Button>See how we work</Button>
              </div>
              <div className=" p-4 flex flex-col items-center justify-center text-center bg-[#005637] text-white rounded-4xl h-1/2 w-full shadow-[0_12px_35px_rgba(0,0,0,0.14)] transform transition-all hover:-translate-y-2 duration-300 cursor-pointer">
                <h3>Donate</h3>
                <p className="text-sm sm:text-base mb-2">
                  Help uplift learners through essential resources, project
                  funding, and continued educational opportunities.
                </p>
                <Button className="border-amber-50">Donate now</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Projects Gallery section*/}
      <section className="lg:px-16 ">
        <div className="mt-18 p-4 sm:p-8 lg:py-20  text-center flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-8 mb-6 text-center ">
            Projects Gallery
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-2 w-full pb-4 ">
            <div className="md:col-span-2 ">
              <img src="gallery-1.jpg" alt="" className="lg:h-[50vh] h-full w-full rounded-2xl object-cover" />
            </div>
            <div>
              <img src="gallery-2.jpg" alt="" className="lg:h-[50vh] h-full w-full rounded-2xl object-cover" />
            </div>
            <div>
              <img src="gallery-3.jpg" alt="" className="lg:h-[50vh] h-full w-full rounded-2xl object-cover" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-2 h-full w-full  ">
            <div>
              <img src="gallery-3.jpg" alt="" className="lg:h-[50vh] h-full w-full rounded-2xl object-cover" />
            </div>
            <div>
              <img src="gallery-2.jpg" alt="" className="lg:h-[50vh] h-full w-full rounded-2xl object-cover" />
            </div>
            <div className="md:col-span-2">
              <img src="gallery-1.jpg" alt="" className="lg:h-[50vh] h-full w-full rounded-2xl object-cover" />
            </div>
          </div>

          <Button className="mt-10">View gallery</Button>
        </div>
      </section>
    </main>
  );
}

export default Projects;
