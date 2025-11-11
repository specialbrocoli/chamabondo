import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Calender from "./pages/Calender";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Admissions from "./pages/Admissions";
import { Route, Routes } from "react-router-dom";
import ObserverProvider from "./components/Obeserver-provider";


const App = () => {
  return (
    <>
      <ObserverProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Admissions" element={<Admissions />} />
          <Route path="/Calender" element={<Calender />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </ObserverProvider>
    </>
  );
};

export default App;
