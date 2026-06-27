"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../Component/ul/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "../Component/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Frontend",
    title: "Ice Cream Parlor",
    description:
      "A fully responsive and visually engaging frontend project built using HTML, CSS, and JavaScript. Features a clean homepage, interactive menu, and a smooth, user-friendly layout.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/react1.png",
    live: "",
    github: "https://github.com/Divyadharshana5/Ice_cream-parlour-website.git",
    file: "IceCreamParlor.jsx"
  },
  {
    num: "02",
    category: "Fullstack",
    title: "Estate App",
    description:
      "A full-stack real estate platform designed to simplify property browsing, listing, and management. Features user authentication, detailed listings, and data management through RESTful APIs.",
    stack: [{ name: "Next.js" }, { name: "Tailwind" }, { name: "Node.js" }],
    image: "/react3.png",
    live: "",
    github: "https://github.com/Divyadharshana5/Estate_App.git",
    file: "EstateApp.jsx"
  },
  {
    num: "03",
    category: "Frontend",
    title: "Travel Website",
    description:
      "A visually immersive frontend project designed to inspire exploration. Features a modern landing page, interactive destination cards, smooth navigation, and call-to-action sections.",
    stack: [{ name: "Next.js" }, { name: "Tailwind" }],
    image: "/react2.png",
    live: "",
    github: "https://github.com/Divyadharshana5/Travel-website.git",
    file: "TravelWebsite.jsx"
  },
  {
    num: "04",
    category: "Fullstack",
    title: "Bookstore MERN Stack",
    description:
      "A complete MERN stack eCommerce application tailored for bookstores. It allows users to browse, purchase, and manage books. Built with a robust backend using MongoDB, Express, and Node.js, combined with a dynamic React frontend.",
    stack: [{ name: "React" }, { name: "Node.js" }, { name: "MongoDB" }, { name: "Express" }],
    image: "/react2.png",
    live: "https://bookstore-mern-stack-mu.vercel.app",
    github: "https://github.com/Divyadharshana5/BOOKSTORE-MERN-STACK",
    file: "BookStore.jsx"
  },
  {
    num: "05",
    category: "Frontend",
    title: "Agri Website",
    description:
      "A dedicated agricultural website built with JavaScript, focusing on responsive design and interactive elements for modern farming solutions. It provides an intuitive interface for agricultural resources and tools.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/react1.png",
    live: "",
    github: "https://github.com/Divyadharshana5/Agri-website",
    file: "AgriWebsite.jsx"
  },
  {
    num: "06",
    category: "Backend",
    title: "CRUD Java",
    description:
      "A backend application demonstrating complete CRUD (Create, Read, Update, Delete) operations. Built with Java, it showcases robust architectural patterns and database connectivity.",
    stack: [{ name: "Java" }, { name: "SQL" }],
    image: "/react3.png",
    live: "",
    github: "https://github.com/Divyadharshana5/Crud-java",
    file: "CrudJava.java"
  },
  {
    num: "07",
    category: "Final Year Project",
    title: "Saferide Guardian",
    description:
      "My Final Year Project focused on safety and security. Saferide Guardian provides real-time tracking, monitoring, and emergency response features to ensure user safety during transit.",
    stack: [{ name: "React" }, { name: "Node.js" }, { name: "MongoDB" }],
    image: "/react2.png",
    live: "",
    github: "https://github.com/Divyadharshana5/Saferide-Guardian",
    file: "SaferideGuardian.jsx"
  },
  {
    num: "08",
    category: "API",
    title: "Movie Areas API",
    description:
      "A robust RESTful API built for managing and retrieving movie information efficiently. Features secure endpoints and fast response times.",
    stack: [{ name: "JavaScript" }, { name: "Node.js" }, { name: "Express" }],
    image: "/react1.png",
    live: "https://movieareas-api-test.vercel.app",
    github: "https://github.com/Divyadharshana5/movieareas-api",
    file: "MovieAPI.js"
  },
  {
    num: "09",
    category: "Fullstack",
    title: "AgriVerity",
    description:
      "An innovative agricultural solution designed to ensure product verity, transparency, and traceability from farm to table.",
    stack: [{ name: "TypeScript" }, { name: "React" }, { name: "Node.js" }],
    image: "/react2.png",
    live: "",
    github: "https://github.com/Divyadharshana5/AgriVerity",
    file: "AgriVerity.tsx"
  },
  {
    num: "10",
    category: "Fullstack",
    title: "Full-Stack Toolkit",
    description:
      "A comprehensive collection of full-stack development implementations showcasing best practices in end-to-end architecture.",
    stack: [{ name: "JavaScript" }, { name: "MongoDB" }, { name: "Express" }],
    image: "/react3.png",
    live: "",
    github: "https://github.com/Divyadharshana5/Full-stack",
    file: "FullStack.jsx"
  },
  {
    num: "11",
    category: "Frontend",
    title: "Ice Cream Parlour",
    description:
      "A delightful and interactive website for an ice cream parlour featuring vibrant designs, smooth animations, and responsive layouts.",
    stack: [{ name: "JavaScript" }, { name: "HTML 5" }, { name: "CSS 3" }],
    image: "/react1.png",
    live: "https://ice-cream-parlour-website-six.vercel.app",
    github: "https://github.com/Divyadharshana5/Ice_cream-parlour-website",
    file: "IceCream.js"
  },
];

export default function WorkPage() {
  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.4 } }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-20 px-5"
    >
      <div className="w-full">
        <div className="mb-8 animate-fade-up">
          <p className="font-mono text-sm tracking-wide text-accent uppercase mb-2">Featured Work</p>
          <h2 className="text-4xl xl:text-5xl font-bold text-white tracking-tight">Products, not just code</h2>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#08080c] shadow-2xl flex flex-col h-[700px] animate-fade-up" style={{ animationDelay: '200ms' }}>
          
          {/* IDE Header */}
          <div className="flex h-10 items-center justify-between border-b border-white/10 bg-[#030305] px-4 select-none">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#ff5f56]"></span>
              <span className="h-3 w-3 rounded-full bg-[#ffbd2e]"></span>
              <span className="h-3 w-3 rounded-full bg-[#27c93f]"></span>
            </div>
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest hidden sm:block">IDE — Project Workspace</span>
            <div className="w-12 hidden sm:block"></div>
          </div>

          <div className="flex flex-1 overflow-hidden">
            {/* Sidebar Explorer */}
            <div className="w-64 border-r border-white/10 bg-[#030305] overflow-y-auto hidden md:block">
              <div className="p-3 font-mono text-[11px] uppercase tracking-wider text-zinc-500 font-bold border-b border-white/10">Explorer</div>
              <div className="p-2 space-y-1">
                <div className="flex items-center gap-1.5 py-1 px-2 font-mono text-xs text-zinc-400">
                  📂 Projects
                </div>
                <div className="pl-5 space-y-0.5 border-l border-white/10 ml-3.5">
                  {projects.map((proj, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveProject(proj)}
                      className={`w-full flex items-center py-1.5 px-2 font-mono text-xs text-left rounded-md transition-all ${activeProject.num === proj.num ? "bg-accent/15 text-white shadow-[0_0_10px_-2px_rgba(0,255,153,0.2)]" : "text-zinc-500 hover:text-zinc-300 hover:bg-white/5"}`}
                    >
                      <span className="text-accent-cyan text-[9px] font-bold border border-accent-cyan/20 px-1 rounded bg-accent-cyan/5 mr-2 shrink-0">JSX</span>
                      <span className="truncate">{proj.title}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Editor Area */}
            <div className="flex-1 flex flex-col overflow-hidden bg-[#0a0a0f]">
              {/* Editor Tabs */}
              <div className="flex items-center justify-between border-b border-white/10 bg-[#030305] px-4 py-2">
                <div className="flex items-center gap-2">
                  <span className="text-accent-cyan text-[9px] font-bold border border-accent-cyan/20 px-1 rounded bg-accent-cyan/5 shrink-0">JSX</span>
                  <span className="font-mono text-xs text-white">{activeProject.file}</span>
                </div>
                <div className="flex gap-2">
                  <a href={activeProject.github} target="_blank" rel="noreferrer" className="flex items-center justify-center rounded-lg border border-white/10 bg-white/[0.02] p-1.5 text-zinc-400 hover:border-accent hover:text-accent transition-colors" title="GitHub">
                    <BsGithub />
                  </a>
                  {activeProject.live && (
                    <a href={activeProject.live} target="_blank" rel="noreferrer" className="flex items-center justify-center rounded-lg border border-white/10 bg-white/[0.02] p-1.5 text-zinc-400 hover:border-accent hover:text-accent transition-colors" title="Live Site">
                      <BsArrowUpRight />
                    </a>
                  )}
                </div>
              </div>

              {/* Editor Content */}
              <div className="flex-1 overflow-y-auto p-4 md:p-6 font-mono text-xs leading-relaxed text-zinc-400 flex flex-col md:flex-row gap-6">
                
                {/* Code Representation */}
                <div className="flex-1">
                  <div className="flex"><span className="w-8 select-none text-zinc-600 text-right pr-4">1</span><span className="text-zinc-500">// Project: {activeProject.title}</span></div>
                  <div className="flex"><span className="w-8 select-none text-zinc-600 text-right pr-4">2</span><span><span className="text-accent-violet">import</span> {"{ "} <span className="text-white">{activeProject.stack.map(s => s.name).join(", ")}</span> {" }"} <span className="text-accent-violet">from</span> <span className="text-accent-cyan">'@stack'</span>;</span></div>
                  <div className="flex"><span className="w-8 select-none text-zinc-600 text-right pr-4">3</span></div>
                  <div className="flex"><span className="w-8 select-none text-zinc-600 text-right pr-4">4</span><span><span className="text-accent-violet">export const</span> <span className="text-accent-cyan">projectDetails</span> = {"{"}</span></div>
                  <div className="flex"><span className="w-8 select-none text-zinc-600 text-right pr-4">5</span><span>  <span className="text-zinc-300">category</span>: <span className="text-accent-cyan">"{activeProject.category}"</span>,</span></div>
                  <div className="flex"><span className="w-8 select-none text-zinc-600 text-right pr-4">6</span><span className="whitespace-pre-wrap">  <span className="text-zinc-300">description</span>: <span className="text-[#a5d6ff]">"{activeProject.description}"</span></span></div>
                  <div className="flex"><span className="w-8 select-none text-zinc-600 text-right pr-4">7</span><span>{"};"}</span></div>
                </div>

                {/* Visual Preview */}
                <div className="w-full md:w-1/2 flex-shrink-0">
                  <div className="relative w-full h-[250px] md:h-full min-h-[300px] rounded-lg overflow-hidden border border-white/10 group">
                    <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                    <Image
                      src={activeProject.image}
                      fill
                      className="object-cover"
                      alt={activeProject.title}
                    />
                  </div>
                </div>
              </div>

              {/* Terminal Footer */}
              <div className="h-8 border-t border-white/10 bg-[#030305] px-3 font-mono text-[10px] text-zinc-500 flex items-center justify-between select-none">
                <div className="flex gap-4">
                  <span className="text-accent">git: main</span>
                  <span>0 errors, 0 warnings</span>
                </div>
                <div className="hidden sm:flex gap-4">
                  <span>UTF-8</span>
                  <span>React JSX</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
