import React from "react";
import Banner from "../components/Banner";
import Button from "../components/Button";

function Contact() {
  return (
    <main>
      {/*Banner section*/}
      <Banner />

      {/*Banner section*/}
      <section>
        <div className=" mt-12 p-4 sm:p-8 lg:p-20  text-center flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-8 mb-6 text-center ">
            Get in touch
          </h2>
          <div className="max-w-xl pb-5 ">
            <p className="text-[min(10vw, 70vw)] mb-6">
              Get in touch with Chamabondo Primary School to learn more about
              our programs, enrollment, or how you can support. We’re happy to
              answer questions, welcome visits, and share more about our vibrant
              learning community. Connect with us through phone, email, or in
              person.
            </p>
          </div>
        </div>
      </section>

      {/*Contact form*/}
      <div className="px-4 sm:px-8 lg:px-20 py-10 h-auto  lg:h-[100vh] lg:relative">
        <div className="max-md:hidden w-full lg:h-[28vh] bg-[#005637] rounded-2xl"></div>

        {/* Form Container */}
        <div className="lg:absolute top-[100px] left-4 right-4 sm:left-8 sm:right-8 lg:left-30 lg:right-30 xl:left-45 xl:right-45  grid grid-cols-1 lg:grid-cols-3 lg:gap-6 rounded-md shadow-[0_12px_35px_rgba(0,0,0,0.14)] bg-gray-50">
          {/* Left Side */}
          <div className="bg-[#005637] text-white rounded-md px-6 py-6 lg:px-12 flex flex-col justify-center shadow-[0_12px_35px_rgba(0,0,0,0.20)]">
            <h4 className="font-bold text-lg lg:text-[20px] pb-3 text-center lg:text-left">
              Contact Info
            </h4>
            <p className=" lg:text-center text-left pb-4 text-sm">
              Chamabondo learners engage in hands-on projects that spark
              creativity and build confidence.
            </p>

            <div className="pb-4 gap-2 flex text-[14px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <path
                    stroke-dasharray="64"
                    stroke-dashoffset="64"
                    d="M8 3c0.5 0 2.5 4.5 2.5 5c0 1 -1.5 2 -2 3c-0.5 1 0.5 2 1.5 3c0.39 0.39 2 2 3 1.5c1 -0.5 2 -2 3 -2c0.5 0 5 2 5 2.5c0 2 -1.5 3.5 -3 4c-1.5 0.5 -2.5 0.5 -4.5 0c-2 -0.5 -3.5 -1 -6 -3.5c-2.5 -2.5 -3 -4 -3.5 -6c-0.5 -2 -0.5 -3 0 -4.5c0.5 -1.5 2 -3 4 -3Z"
                  >
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      dur="0.6s"
                      values="64;0"
                    />
                    <animateTransform
                      id="lineMdPhoneCallLoop0"
                      fill="freeze"
                      attributeName="transform"
                      begin="0.6s;lineMdPhoneCallLoop0.begin+2.7s"
                      dur="0.5s"
                      type="rotate"
                      values="0 12 12;15 12 12;0 12 12;-12 12 12;0 12 12;12 12 12;0 12 12;-15 12 12;0 12 12"
                    />
                  </path>
                  <path
                    stroke-dasharray="4"
                    stroke-dashoffset="4"
                    d="M15.76 8.28c-0.5 -0.51 -1.1 -0.93 -1.76 -1.24M15.76 8.28c0.49 0.49 0.9 1.08 1.2 1.72"
                  >
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      begin="lineMdPhoneCallLoop0.begin+0s"
                      dur="2.7s"
                      keyTimes="0;0.111;0.259;0.37;1"
                      values="4;0;0;4;4"
                    />
                  </path>
                  <path
                    stroke-dasharray="6"
                    stroke-dashoffset="6"
                    d="M18.67 5.35c-1 -1 -2.26 -1.73 -3.67 -2.1M18.67 5.35c0.99 1 1.72 2.25 2.08 3.65"
                  >
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      begin="lineMdPhoneCallLoop0.begin+0.2s"
                      dur="2.7s"
                      keyTimes="0;0.074;0.185;0.333;0.444;1"
                      values="6;6;0;0;6;6"
                    />
                  </path>
                </g>
              </svg>
              <span>
                <p>+263 12 345 6789</p>
                <p>+263 12 345 6789</p>
              </span>
            </div>

            <div className="pb-4 text-[14px] gap-2 flex ">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  className="animate-bounce"
                >
                  <path
                    fill="#fff"
                    d="M5.25 4h13.5a3.25 3.25 0 0 1 3.245 3.066L22 7.25v9.5a3.25 3.25 0 0 1-3.066 3.245L18.75 20H5.25a3.25 3.25 0 0 1-3.245-3.066L2 16.75v-9.5a3.25 3.25 0 0 1 3.066-3.245zh13.5zM20.5 9.373l-8.15 4.29a.75.75 0 0 1-.603.043l-.096-.042L3.5 9.374v7.376a1.75 1.75 0 0 0 1.606 1.744l.144.006h13.5a1.75 1.75 0 0 0 1.744-1.607l.006-.143zM18.75 5.5H5.25a1.75 1.75 0 0 0-1.744 1.606L3.5 7.25v.429l8.5 4.474l8.5-4.475V7.25a1.75 1.75 0 0 0-1.607-1.744z"
                    stroke-width="0.5"
                    stroke="#fff"
                  />
                </svg>
              </span>{" "}
              <p>info@chamas.com</p>
            </div>

            <div className="text-[14px] gap-2 flex">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#fff"
                    d="M5.843 4.568a8.708 8.708 0 0 1 12.315 12.314l-1.188 1.174q-1.312 1.288-3.406 3.313a2.25 2.25 0 0 1-3.128-.001l-3.491-3.396q-.658-.646-1.102-1.09a8.71 8.71 0 0 1 0-12.314M17.096 5.63A7.207 7.207 0 1 0 6.904 15.822l1.487 1.467a748 748 0 0 0 3.088 3a.75.75 0 0 0 1.043 0l3.394-3.3q.705-.69 1.18-1.167a7.207 7.207 0 0 0 0-10.192M12.001 7.5a3.5 3.5 0 1 1-.002 7.001a3.5 3.5 0 0 1 .002-7.001M12 9a2 2 0 1 0 0 4a2 2 0 0 0 0-4"
                    stroke-width="0.5"
                    stroke="#fff"
                  />
                </svg>
              </span>{" "}
              <p>Victoria Falls, Zimbabwe</p>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="col-span-2 px-4 sm:px-6 lg:px-8 py-8">
            <h3 className="font-semibold text-lg sm:text-xl lg:text-2xl 2xl:text-3xl mb-6">
              Contact Us
            </h3>

            <div className="space-y-6">
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold italic text-black"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="last-name"
                  autoComplete="family-name"
                  class="block w-full outline-hidden border-b-2 border-[#005637]  bg-gray-50 px-3.5 py-2  text-base text-gray-900 outline-1 placeholder:text-gray-400 focus:outline-2  focus:outline-indigo-600"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold italic text-black"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  autoComplete="email"
                  class="block w-full outline-hidden border-b-2 border-[#005637]  bg-gray-50 px-3.5 py-2 text-base text-gray-900 outline-1 placeholder:text-gray-400 focus:outline-2  focus:outline-indigo-600"
                />
              </div>

              <div>
                <label
                  htmlFor="phone-number"
                  className="block text-sm font-semibold italic text-black"
                >
                  Phone number
                </label>
                <div className="mt-2 flex gap-2 border-b-2 border-[#005637] bg-gray-50 px-3.5 py-2">
                  <select className="text-sm text-gray-500 focus:outline-none">
                    <option>ZW</option>
                    <option>ZM</option>
                  </select>
                  <input
                    type="text"
                    id="phone-number"
                    className="flex-grow text-base text-gray-900 placeholder:text-gray-400 focus:outline-none"
                    placeholder="123-456-7890"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold italic text-black"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  class="block w-full outline-hidden border-b-2 border-[#005637] bg-gray-50 px-3.5 py-2 text-base text-gray-900 outline-1 placeholder:text-gray-400 focus:outline-2  focus:outline-indigo-600"
                ></textarea>
              </div>
              <Button className="mt-4">Submit</Button>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className=" p-4 sm:p-8   text-center flex flex-col items-center">
          <div className="max-w-xl ">
            <p className="text-[min(10vw, 70vw)] lg:p-8 mt-8 mb-6 text-center ">
              Chamabondo learners engage in hands-on projects that spark
              creativity and build confidence. From science experiments to art
              displays, each task nurtures critical thinking and teamwork. These
              projects help students explore real-world skills, making learning
              both exciting and meaningful in every class.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
