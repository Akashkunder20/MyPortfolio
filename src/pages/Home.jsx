import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contacts";
import Skills from "../components/Skills";
import EducationSection from "../components/EducationSection";
// import Footer from "../components/Footer";
import LogoLoop from "@/components/LogoLoop";
import PixelTrail from "@/components/PixelTrail";
import {
  SiReact,
  //SiNextdotjs,
  //SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiJavascript,
  SiHtml5,
  SiMongodb,
  SiExpress,
} from "react-icons/si";



const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  //{ node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
 // { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { node: <SiHtml5 />, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
 // { node: <SiCss3 />, title: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
  { node: <SiExpress />, title: "Express.js", href: "https://expressjs.com" },

];
function Home() {
  return (
    <>
    
      <Hero />
      <About />
        <Skills />
       <div className="h-24 flex items-center justify-center overflow-hidden relative">
  <LogoLoop
    logos={techLogos}
    speed={100}
    direction="left"
    logoHeight={40}
    gap={60}
    hoverSpeed={0}
    scaleOnHover
    fadeOut
    fadeOutColor="#ffffff"
    ariaLabel="Technology partners"
  />
    </div>
      <Projects />
        <EducationSection />
        <Contact />
        {/* <Footer /> */}
       
<div style={{ height: "300px", position: "relative", overflow: "hidden" }}>
  {/* Background Name */}
  <h1
    className="absolute inset-0 flex items-center justify-center 
               text-[5rem] font-bold tracking-widest 
               text-transparent bg-clip-text 
               bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 
               opacity-20 select-none"
    style={{ zIndex: 0 }}
  >
    AKASH KUNDER
  </h1>

  {/* Pixel Trail Effect */}
  <PixelTrail
    gridSize={50}
    trailSize={0.1}
    maxAge={250}
    interpolate={5}
    color="#5227FF"
    gooeyFilter={{ id: "custom-goo-filter", strength: 2 }}
    gooeyEnabled
    gooStrength={2}
    style={{ zIndex: 1 }}
  />
</div>

        
    </>
  );
}

export default Home;