"use client";

import Image from "next/image";
import { motion }  from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute w-80 h-80 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"
            style={{
              top: "-10rem",
              left: "-10rem",
              backgroundColor: "rgb(147 51 234)",
            }}
          />
        </div>

        <div className="container-width relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:">
              Hi, I'm <span className="gradient-text">Dilara Hasan</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8" style={{ color: "rgb(209 213 219)" }}>
              Student at <span style={{ color: "rgb(192b132 252)" }}>42 Heilbronn</span>
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full font-semibold transition-all glow purple"
              style={{
                background: "linear-gradient(to right, rgb(147 51 234), rgb(59 130 246))",
                color: "white",
              }}
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            >
              Learn About Me
            </motion.button>
          </motion.div>
        </div>
      </section>
    </>
  )
}