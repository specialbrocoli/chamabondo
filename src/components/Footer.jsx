import React from "react";
import Button from "./Button";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-15 px-6 rounded-t-4xl">
      <div className="container mx-auto max-w-6xl  ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: Logo and Social Media */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <img src="/logo.png" alt="" />
            </div>

            <div className="space-y-2">
             
                  <h3 className="text-sm font-medium text-black ">Follow us on</h3>
            
             
              <div className="flex space-x-3">
                {/* Social Media Icons */}
                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center"
                >
                  <img src="/fb.png" alt="" />
                </a>

                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center"
                >
                  <img src="/ig.png" alt="" />
                </a>

                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center"
                >
                  <img src="/linkedin.png" alt="" />
                </a>

                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center"
                >
                  <img src="/whatsapp.png" alt="" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Contact Information */}
          <div className="space-y-4 ">
            <h2 className="text-xl font-semibold text-black ">Contact Us</h2>
            <div className="space-y-2 text-black">
              <p>Stand 1053, Victoria Falls, Zimbabwe</p>
              <p>Call: 77 123 4568</p>
              <p>Email: @chamabondoprimary.ac.zw</p>
            </div>
          </div>

          {/* Column 3: Newsletter Signup */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-black ">
              Sign up for our newsletter
            </h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="First name"
                    className="w-full m px-4 py-2 border border-none bg-white rounded-3xl focus:outline-none focus:ring-1 focus:ring-[#005637]"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Last name"
                    className="w-full px-4 py-2 border border-none bg-white rounded-3xl  focus:outline-none focus:ring-1 focus:ring-[#005637]"
                  />
                </div>
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border border-none bg-white rounded-3xl focus:outline-none focus:ring-1 focus:ring-[#005637]"
                />
              </div>
               <div className="mb-4"> 
                   <Button>Sign up</Button>
               </div>

               
            </form>
          </div>
        </div>
      </div>
      <div className="border-t-3 border-[#005637] "></div>
    </footer>
  );
};

export default Footer;
