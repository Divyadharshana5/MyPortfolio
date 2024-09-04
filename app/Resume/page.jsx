"use client";

// import { AlignVerticalDistributeStartIcon } from "lucide-react";
// import { describe } from "node:test";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const about = {
  title: "About me",
  describe:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime tempore nesciunt unde saepe modi, neque dolor ratione.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Divyadharshana",
    },
    {
      fieldName: "Phone",
      fieldValue: "8489638949",
    },
    {
      fieldName: "Experience",
      fieldValue: "1 year",
    },
    {
      fieldName: "Skype",
      fieldValue: "Dharshana.01",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Email",
      fieldValue: "divyadharshana3@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English,Tamil,Malayalam",
    },
  ],
};

const experience = {
  icon: "/assests/resume/badge.svg",
  title: "My experience",
  desription:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime tempore nesciunt unde saepe modi, neque dolor ratione.",
  items: [
    {
      company: "Tech-Solutions-Inc.",
      position: "Full Stack Developer",
      duration: "2023-present",
    },
    {
      company: "Web-Design-Studio",
      position: "Front-End Developer Intern",
      duration: "Summer-2022",
    },
    {
      company: "E-Commerce Startup",
      position: "Freelance Web Developer",
      duration: "2022",
    },
    {
      company: "Tech Acadamey",
      position: "Teaching Assistant",
      duration: "2022-2023",
    },
  ],
};

const education = {
  icon: "/assests/resume/cap.svg",
  title: "My education",
  desription:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime tempore nesciunt unde saepe modi, neque dolor ratione.",
  items: [
    {
      institution: "Online Course Platform",
      degree: "Full Stack Web Development",
      duration: "2024",
    },
    {
      institution: "Codecademy",
      degree: "Front-end-Track",
      duration: "2024",
    },
    {
      institution: "Online Course",
      degree: "Programming Course",
      duration: "2023",
    },
    {
      institution: "Tech Institute",
      degree: "Certified Web Developer",
      duration: "2023",
    },
  ],
};

const skills = {
  title: "My skills",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime tempore nesciunt unde saepe modi, neque dolor ratione.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ],
};
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../Component/ul/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../Component/ul/tooltip";

import { ScrollArea } from "../Component/ul/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              experience
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
