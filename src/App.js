import React from "react";
import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection ";
import ServicesSection from "./components/ServicesSection";
import ResumeSection from "./components/ResumeSection"
import SkillsSection from "./components/SkillsSection";
import Testimonials from "./components/Testimonials";
// import VideoReview from "./components/VideoReview";
import "./App.css";
import VideoReview from "./components/VideoReview";
import Portfolio from "./components/Portfolio";

import Portfolioo from "./components/Portfolioo";
import HireMeSection from "./components/HireMeSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomeSection />
      <AboutSection/>
      <ServicesSection/>
      <ResumeSection/>
      <SkillsSection/>
      <Testimonials/>
      <VideoReview/>
      <Portfolio/>
      <Portfolioo/>
      
      <HireMeSection/>
      <Footer/>
    </div>
  );
}

export default App;
