import "./router.css";
import React from "react";
import {Routes,Route} from "react-router-dom";
import Home from "../components/pages/home/home";
import About from "../components/pages/about/about";
import PageNotFound from "../components/pages/page-not-found/page-not-found";
import Contact from "../components/pages/contact/contact";
import ParentsCommittee from "../components/ParentsCommittee/ParentsCommittee";
import Layers from "../components/pages/layers/layers";
import Teacher from "../components/pages/teachers/teachers";


function Router() {
  return (
    <div className="router">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element= {<About/>}/>
        <Route path="/contact" element= {<Contact/>}/>
        <Route path="/ParentsCommittee" element ={<ParentsCommittee/>}/>
        <Route path="/Layers" element={<Layers/>} />
        <Route path="/Teacher" element={<Teacher/>}/>
        <Route path="/*" element={<PageNotFound/>}/>
      </Routes>
    </div>
  );
};

export default Router;
