import React from "react";

const Cards = (props) => {
  return (
    <div className=" pb-20 px-6">
      <div className="bg-white  rounded-lg shadow-[0_12px_35px_rgba(0,0,0,0.15)]  max-w-[297px] h-[470px]  transform transition-all hover:-translate-y-2 duration-300 cursor-pointer  ">
        <div className=" overflow-hidden">
          <img
            src={props.image}
            alt=""
            className=" w-full h-full object-cover rounded-t-lg "
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

{
  /* <div className='mt-20 lg:mt-40 p-8'>
  <h2 className='text-2xl md:text-3xl font-bold mt-8 mb-7 text-center pb-7 '>
    Why choose us
  </h2>

  <div className='flex max-lg:flex-wrap justify-center'>
    {cardsData.map(createCards)}
  </div>
</div>; */
}

// function createCards(data) {
//   return (
//     <Cards
//       key={data.id}
//       image={data.ImgURL}
//       icon={data.icon}
//       title={data.title}
//       description={data.description}
//     />
//   );
// }

export default Cards;
