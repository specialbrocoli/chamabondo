import React from "react";
import Button from "./Button";

const Newsletter = () => {
  return (
    <div className="bg-gray-50 py-20 px-6 sm:px-20 h-[90vh]">
      <div className="bg-gray-800 bg-[url('/sign-up.jpg')] bg-blend-overlay bg-center bg-no-repeat bg-cover w-full h-full rounded-3xl flex items-center justify-center">
        
        {/* Centered content block */}
        <div className="flex flex-col items-center justify-center text-center space-y-6">
          <h2 className="text-white text-2xl sm:text-4xl font-bold">
            Sign up for updates and news
          </h2>

          <form
            action="submit"
            className="flex flex-col sm:flex-row gap-4 items-center justify-center"
          >
            <input
              type="email"
              placeholder="Email"
              className="px-4 py-2 rounded-3xl w-72 sm:w-96 focus:outline-none bg-white text-black italic "
            />
            
             <Button>Sign Up</Button>
          </form>
        </div>
        
      </div>
    </div>
  );
};

export default Newsletter;

