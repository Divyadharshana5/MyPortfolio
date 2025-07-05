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
    title: "Ice_Cream-Parlor-website",
    description:
      "The Ice Cream Parlor Website is a fully responsive and visually engaging frontend project built using HTML, CSS, and JavaScript. It features a clean homepage with a welcoming hero section, an interactive menu showcasing various ice cream flavors, and a smooth, user-friendly layout across all devices. The website includes subtle animations, smooth scrolling, and a working contact form with basic validation powered by JavaScript. This project helped me strengthen my frontend fundamentals, improve my UI/UX design sense, and practice DOM manipulation without relying on frameworks. It's a great example of how creative design and pure frontend skills can bring a brand to life online.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/react1.png",
    live: "",
    github: "https://github.com/Divyadharshana5/Ice_cream-parlour-website.git",
  },
  {
    num: "02",
    category: "Fullstack",
    title: "Estate_App",
    description:
      "The Estate App is a full-stack real estate platform built using React.js, Node.js, and Tailwind CSS, designed to simplify property browsing, listing, and management. The frontend offers a clean and responsive UI where users can explore properties, filter based on preferences, and view detailed listings. On the backend, the app uses Node.js and Express to handle routing, user authentication, and data management through RESTful APIs. This project also includes features like secure login, property uploads, user dashboards, and real-time form validation. Working on this application enhanced my understanding of full-stack architecture, API integration, and building production-ready UI with Tailwind CSS. It showcases my ability to create dynamic, data-driven web apps from scratch.",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }, { name: "Node.js" }],
    image: "/react3.png",
    live: "",
    github: "https://github.com/Divyadharshana5/Estate_App.git",
  },
  {
    num: "03",
    category: "Frontend",
    title: "Travel-website",
    description:
      "The Travel Website is a fully responsive and visually immersive frontend project developed using HTML, Tailwind CSS, and JavaScript. Designed to inspire exploration, it features a modern landing page, interactive destination cards, smooth navigation, and call-to-action sections for bookings and travel plans. Tailwind CSS was used to build a clean, mobile-first UI with elegant spacing, gradients, and hover effects, while JavaScript added interactivity like dynamic sliders, responsive menus, and form validation. This project enhanced my skills in building real-world UI components, organizing clean code, and creating user-focused experiences in the travel domain.",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css 3" }],
    image: "/react2.png",
    live: "",
    github: "https://github.com/Divyadharshana5/Travel-website.git",
  },
];

export default function WorkPage() {
  const githubUsername = "Divyadharshana5"; // <-- GitHub username only

  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;

    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-start py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[520px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[100%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline"></div>
              <h2 className="text-[42px] font-bold leaDivyawhite group-hover:text-accent ">
                {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger
                        className="w-[70px] h-[70px] rounded-full
                    bg-white/5 flex justify-center items-center group"
                      >
                        <BsArrowUpRight
                          className="text-white text-3xl
                      group-hover:text-accent"
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger
                        className="w-[70px] h-[70px] rounded-full
                    bg-white/5 flex justify-center items-center group"
                      >
                        <BsGithub
                          className="text-white text-3xl
                      group-hover:text-accent"
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Visit GitHub Profile</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[520px] relative group flex justify-center items-center bg-pink-50/20 rounded-lg overflow-hidden">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover rounded-lg"
                          style={{ objectPosition: "center 30%" }}
                          alt={project.title}
                          priority={index === 0}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
