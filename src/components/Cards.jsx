import React from "react";

const Cards = (props) => {
  return (
    
    <div className=" pb-20 px-6">
      
      
      <div className="bg-white  rounded-lg shadow-[0_12px_35px_rgba(0,0,0,0.15)]  max-w-[297px] h-[470px]  transform transition-all hover:-translate-y-2 duration-300 cursor-pointer  " >
        <div className=" overflow-hidden">
          <img
            src= {props.image}
            alt= "" 
            className=" w-full h-full object-cover rounded-t-lg "
          />
        </div>
        <div className="text-center p-2 flex  flex-col items-center px-7 pt-4 ">
           <div><img src= {props.icon}alt="" /></div>
          <h4 className=" font-bold text-[20px]">{props.title}</h4>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
