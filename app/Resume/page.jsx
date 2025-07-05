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
      fieldValue: "divyadharshana3@gmail.com.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English,Tamil",
    },
  ],
};

const experience = {
  icon: "/assests/resume/badge.svg",
  title: "My experience",
  desription:
    "Final-year student at JEC, gaining hands-on experience by working on real-time frontend projects. Building responsive user interfaces using React.js, Tailwind CSS, and integrating APIs to deliver smooth user experiences in a fast-paced startup environment.",
  items: [
    {
      company: "Startup",
      position: "Front-End Developer Intern",
      duration: "2025-present",
    },
    {
      company: "IIT Jammu",
      position: "Smart India Hackathon",
      duration: "Winter-2024",
    },
  ],
};

const education = {
  icon: "/assests/resume/cap.svg",
  title: "My education",
  desription:
    "As a passionate and fast-learning Computer Science student, I’ve consistently challenged myself beyond the classroom by working on real-world projects, internships, and hackathons. My education at JEC has provided a strong foundation in data structures, web technologies, and software engineering principles—complemented by my curiosity to explore new tools and frameworks on my own.",
  items: [
    {
      institution: "Government Girls High School,ManavalaNagar",
      degree: "10th(85%)",
      duration: "2020",
    },
    {
      institution: "Rmjain govt. girls school,Thiruvallur",
      degree: "11th-12th(80%)",
      duration: "2021-2022",
    },
    {
      institution: "Jaya Engineering College",
      degree: "BE-CSE",
      duration: "2022-2026",
    },
    {
      institution: "Startup",
      degree: "Frontend Developer Intern",
      duration: "2025-Present",
    },
  ],
};

const skills = {
  title: "My skills",
  description:
    "I’m a smart and fast learner with a strong passion for building clean, responsive, and user-friendly web applications. My core strength lies in frontend development using React.js, Tailwind CSS, HTML, CSS, and JavaScript. I'm currently expanding my skills into full-stack development by learning Node.js, Express.js, and MongoDB. I enjoy solving logical problems and quickly adapting to new tools and technologies. I’ve also been selected for Smart India Hackathon 2024 at IIT Jammu, which boosted my ability to collaborate and build real-time solutions under pressure. I’m comfortable working with tools like Git, GitHub, Figma, and deploying projects on Vercel.",
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
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.desription}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-8 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent ">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.desription}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-8 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent ">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>

                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {" "}
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skills, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skills.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skills.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">
                  {about.describe}
                </p>
                <ul className="grid grid-cols-1  gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
