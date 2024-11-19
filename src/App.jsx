import React, { useRef } from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Landing from "./Components/Landing";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

const App = () => {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar
        onScrollToAbout={() => scrollToSection(aboutRef)}
        onScrollToSkills={() => scrollToSection(skillsRef)}
        onScrollToProjects={() => scrollToSection(projectsRef)}
        onScrollToContact={() => scrollToSection(contactRef)}
      />
      <div className="bg-gradient-to-r from-zinc-500 via-stone-600 to-zinc-900">
        <div className="inside inside sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto">
          <Landing />
          <div ref={aboutRef}>
            <About />
          </div>
          <div ref={skillsRef}>
            <Skills />
          </div>
          <div ref={projectsRef}>
            <Projects />
          </div>
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
      </div>
    </>
  );
};

export default App;
