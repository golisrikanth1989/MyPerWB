import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Research from "./components/sections/Research";
import Projects from "./components/sections/Projects";
import ArchitectureVisualization from "./components/sections/ArchitectureVisualization";
import Publications from "./components/sections/Publications";
import Experience from "./components/sections/Experience";
import Skills from "./components/sections/Skills";
import Journey from "./components/sections/Journey";
import Blog from "./components/sections/Blog";
import Contact from "./components/sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-paper">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Research />
        <Projects />
        <ArchitectureVisualization />
        <Publications />
        <Experience />
        <Skills />
        <Journey />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
