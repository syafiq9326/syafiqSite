"use client";

import React from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectSection';
import Navbar from "./components/Navbar";
import ExperienceSection from "./components/ExperienceSection";
import TestimonialSection from "./components/TestimonialSection";

export default function HomePage() {
  return (
    <div className="scroll-smooth">
      <Navbar/>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <TestimonialSection />
    </div>
  );
}
