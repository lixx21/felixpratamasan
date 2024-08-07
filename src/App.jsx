import React from 'react'
import  HeroSection from "./components/HeroSection";
import TechStack from "./components/TechStack"
import Experiences from "./components/Experiences"
import Projects from "./components/Projects"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import "./index.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useEffect } from "react"


const App = () => {
  // useEffect(()=>{
  //   document.title= "FelixPratamasan - Portofolio"
  // }, [])
  
  return (
    <BrowserRouter>
    <div className='App bg-background'>
        <Navbar />
       <HeroSection />
       <TechStack />
       <Projects />
       <Experiences />
       <Footer />
       
    </div>
    </BrowserRouter>
  );
}

export default App;