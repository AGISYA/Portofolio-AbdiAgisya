import About from "@/components/organisems/about";
import Certificates from "@/components/organisems/certificates";
import Resume from "@/components/organisems/education-and-experience";
import Hero from "@/components/organisems/hero";
import Portfolio from "@/components/organisems/portfolio";
import Skills from "@/components/organisems/skills";
import React from "react";

export default function Home() {
  return (
    <div className="bg-gray-800 ">
      <Hero />
      <About />
      <Resume />
      <Portfolio />
      <Certificates />
      <Skills />
    </div>
  );
}
