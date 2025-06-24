import React from "react";
import Button from "./Button";

function Welcome() {
  return (
    <div className="bg-gray-50 py-20 px-6">
      <div className="container mx-auto max-w-8xl text-center flex flex-col items-center">
        {/* Heading */}
        <div className="mb-6 text-center max-w-xl">
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-1">
            Welcome to Chamabondo Primary School
          </h1>
        </div>

        {/* Description */}
        <div className="max-w-xl">
            <p className="text-lg md:text-xl text-black mb-10 leading-relaxed">
          Welcome to Chamabondo, a centre of excellence, innovation, <br />
          and community spirit – shaping confident, responsible future leaders.
        </p>
        </div>
       

        {/* Apply Button */}
        
        <Button>Apply Now</Button>
        <div className="mt-6 relative max-w-8xl ">
          <img
            src="/banner-2.png"
            alt="happy children at school"
            className="rounded-b-4xl  "
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent  to-transparent rounded-b-4xl"></div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
