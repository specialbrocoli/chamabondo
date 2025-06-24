import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import About from "./components/About";

import Cards from "./components/Cards";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import cardsData from "./components/cardsData";

function createCards(data) {
  return (
    <Cards
      key={data.id}
      image={data.ImgURL}
      icon={data.icon}
      title={data.title}
      description={data.description}
    />
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Welcome />
      <About />
      <div className=" bg-gray-50">
         <h2 className="text-2xl md:text-4xl font-bold text-black mb-7 text-center pb-7 "  >
        Why choose us
      </h2>

      <div className="flex flex-wrap gap-1 justify-center px-6  ">
        {cardsData.map(createCards)}
      </div>
      </div>
     

      {/*<Cards
      icon = "/choose-icon-1.png" 
      image = "/choose-1.png"
      title = "Card title"
      description = "Card paragraph"
      
      />*/}
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
