"use client";

import Image from "next/image";
import { motion }  from "framer-motion";
import { projects } from "@/data/projects";
// import ProjectCard from "@/components/ProjectCard";
import Navigation from "./components/Navigation";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Projects from "./components/sections/Projects";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
        <footer className="footer">
          <div className="container-width text-center">
            <p className="text-muted">
              Built with Next.js & Tailwind CSS
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}