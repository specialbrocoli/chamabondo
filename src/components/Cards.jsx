import React from "react";

const Cards = (props) => {
  return (
    <div className=" pb-20 px-6 intersect:motion-preset-expand motion-duration-2000 intersect-half">
      <div className="bg-white hover:bg-[#b2f8deef]  rounded-lg shadow-[0_12px_35px_rgba(0,0,0,0.15)] hover:shadow-2xl  max-w-[297px] h-[470px]  transform transition-all hover:-translate-y-3 duration-300 ease-linear cursor-pointer  ">
        <div className=" overflow-hidden">
          <img
            src={props.image}
            alt=""
            className=" w-full h-full object-cover rounded-t-lg hover:scale-110 transition-transform duration-400 "
          />
        </div>
        <div className="text-center p-2 flex  flex-col items-center px-7 pt-4 ">
          <div>
            <img src={props.icon} alt="" />
          </div>
          <h4 className=" font-bold text-[20px]">{props.title}</h4>
          <p className="text-base">{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
