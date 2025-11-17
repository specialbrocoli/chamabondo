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
import NotFound from './components/NotFound';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='About' element={<About />} />
      <Route path='Admissions' element={<Admissions />} />
      <Route path='Calender' element={<Calender />} />
      <Route path='Projects' element={<Projects />} />
      <Route path='Gallery' element={<Gallery />} />
      <Route path='Contact' element={<Contact />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />
};

export default App;
