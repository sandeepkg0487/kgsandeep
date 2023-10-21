import React from "react";
// pages
import About from "../About/About";
import Home from "../Home/Home";


import store from "../redux/Store";
import CustmeContext from "../CustomeContext";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import { Provider } from "react-redux";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Education from "../Education/Education";
import Contact from "../Contact/Contact";


const Routercomponent = () => {
  const [shareddata, setshareddata] = useState({
    name: "",
    email: "",
  });

  return (
    <Provider store={store}>
      <CustmeContext.Provider value={[shareddata, setshareddata]}>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Skills" element={<Skills/>} />
          <Route path="/Education" element={<Education/>} />
          <Route path="/Contact" element={<Contact/>} />
         </Routes>
      </CustmeContext.Provider>
    </Provider>
  );
};

export default Routercomponent;
