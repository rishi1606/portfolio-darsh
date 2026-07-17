import React from "react";
import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import SkillsGrid from "./components/SkillsGrid";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="app-wrapper">
        {/* Ambient background glows */}
        <div className="ambient-glow-1" />
        <div className="ambient-glow-2" />

        <Navbar />
        <main>
          <Hero />
          <Projects />
          <SkillsGrid />
          <Experience />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;
