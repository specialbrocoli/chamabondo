import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Calender from './pages/Calender';
import Projects from './pages/Projects';
import Admissions from './pages/Admissions';
import NotFound from './components/NotFound';
import Layout from './components/Layout';
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
      <Route path='about' element={<About />} />
      <Route path='admissions' element={<Admissions />} />
      <Route path='calender' element={<Calender />} />
      <Route path='projects' element={<Projects />} />
      <Route path='gallery' element={<Gallery />} />
      <Route path='contact' element={<Contact />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
