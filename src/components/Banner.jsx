import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const Banner = ({ className = "" }) => {
  return (
    <div>
      <div
        className={`h-[90vh] bg-[url("/banner-2.png")] bg-cover bg-center flex items-end justify-center relative after:absolute after:inset-0 after:bg-gradient-to-t after:from-black after:via-transparent after:to-transparent ${className}`}
      >
        <div className="">
          <Button className="-mt-25 z-10">
            <Link to="/admissions">Apply Now</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
