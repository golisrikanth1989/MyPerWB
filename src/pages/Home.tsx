import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Research from "../components/sections/Research";
import Projects from "../components/sections/Projects";
import ArchitectureVisualization from "../components/sections/ArchitectureVisualization";
import Publications from "../components/sections/Publications";
import Experience from "../components/sections/Experience";
import Skills from "../components/sections/Skills";
import Journey from "../components/sections/Journey";
import Blog from "../components/sections/Blog";
import Contact from "../components/sections/Contact";

export default function Home() {
  return (
    <>
      {/* Top-of-page marker for the "Home" nav link, independent of which
          section renders first so it keeps working if the order changes. */}
      <div id="home" />
      <About />
      <Hero />
      <Research />
      <Projects />
      <ArchitectureVisualization />
      <Publications />
      <Experience />
      <Skills />
      <Journey />
      <Blog />
      <Contact />
    </>
  );
}
