"use client";

// import { AlignVerticalDistributeStartIcon } from "lucide-react";
// import { describe } from "node:test";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
  FaGithub,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs, SiMongodb, SiSpringboot, SiMysql } from "react-icons/si";

const about = {
  title: "About me",
  describe:
    "I'm a smart and fast learner with a strong passion for tech and creativity. As a frontend developer skilled in React.js, Tailwind CSS, and solid math logic, I’m currently expanding into backend development to become a complete full-stack developer. I represented my college at Smart India Hackathon 2024 held at IIT Jammu, and I actively participate in hackathons to sharpen my skills.Beyond coding, I love dancing, singing, and diving deep into crime investigation stories—driven by a long-term dream of becoming an IAS officer. I'm always curious, always building, and always learning.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Divyadharshana P",
    },

    {
      fieldName: "Experience",
      fieldValue: "Fresher",
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
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <SiMysql />,
      name: "SQL",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <FaGithub />,
      name: "GitHub",
    },
    {
      icon: <SiSpringboot />,
      name: "Spring Boot",
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
    <section className="py-24 sm:py-32 relative overflow-hidden bg-[#030305]">
      {/* Background elements */}
      <div className="absolute top-40 left-0 w-[500px] h-[500px] bg-accent-violet/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-40 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-5 xl:px-20 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <p className="font-mono text-sm tracking-wide text-accent uppercase mb-2">The Journey</p>
          <h2 className="text-4xl xl:text-5xl font-bold text-white tracking-tight max-w-2xl mb-16">
            From smart logic to <span className="grad-text">scalable infrastructure</span>.
          </h2>
        </motion.div>

        <div className="relative mx-auto mt-20 max-w-4xl">
          {/* Vertical line */}
          <div className="absolute left-[18px] top-3 h-[calc(100%-24px)] w-px bg-white/10 sm:left-1/2" />
          
          <div className="space-y-16 sm:space-y-24">
            
            {/* Education Items */}
            {education.items.map((item, idx) => (
              <motion.div 
                key={`edu-${idx}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`group relative flex flex-col gap-3 pl-12 sm:w-1/2 sm:pl-0 ${idx % 2 === 0 ? 'sm:pr-12 sm:text-right sm:mr-auto' : 'sm:pl-12 sm:ml-auto'}`}
              >
                <span className={`absolute top-1.5 h-4 w-4 rounded-full border-2 transition-all duration-500 left-[11px] bg-[#030305] border-accent-cyan shadow-[0_0_15px_rgba(34,211,238,0.5)] ${idx % 2 === 0 ? 'sm:left-auto sm:-right-2' : 'sm:-left-2'}`} />
                <span className="font-mono text-3xl font-bold text-zinc-700 group-hover:grad-text transition-all duration-500">
                  {item.duration}
                </span>
                <h3 className="text-lg font-semibold text-white group-hover:text-accent transition-colors">
                  {item.degree}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  {item.institution}
                </p>
              </motion.div>
            ))}

            {/* Experience Items */}
            {experience.items.map((item, idx) => (
              <motion.div 
                key={`exp-${idx}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`group relative flex flex-col gap-3 pl-12 sm:w-1/2 sm:pl-0 ${(idx + education.items.length) % 2 === 0 ? 'sm:pr-12 sm:text-right sm:mr-auto' : 'sm:pl-12 sm:ml-auto'}`}
              >
                <span className={`absolute top-1.5 h-4 w-4 rounded-full border-2 transition-all duration-500 left-[11px] bg-[#030305] border-accent shadow-[0_0_15px_rgba(0,255,153,0.5)] ${(idx + education.items.length) % 2 === 0 ? 'sm:left-auto sm:-right-2' : 'sm:-left-2'}`} />
                <span className="font-mono text-3xl font-bold text-zinc-700 group-hover:grad-text transition-all duration-500">
                  {item.duration}
                </span>
                <h3 className="text-lg font-semibold text-white group-hover:text-accent transition-colors">
                  {item.position}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  {item.company}
                </p>
              </motion.div>
            ))}
            
          </div>
        </div>

        {/* Skills Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 pt-16 border-t border-white/10"
        >
          <div className="flex flex-col xl:flex-row gap-12 items-center xl:items-start">
            <div className="w-full xl:w-1/3 text-center xl:text-left">
              <h3 className="text-3xl font-bold mb-4">Tech Stack</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{skills.description}</p>
            </div>
            <div className="w-full xl:w-2/3 grid grid-cols-3 sm:grid-cols-4 gap-4">
              {skills.skillList.map((skill, index) => (
                <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col items-center justify-center gap-3 hover:border-accent hover:bg-accent/5 transition-all group">
                  <div className="text-4xl text-zinc-500 group-hover:text-accent transition-colors">
                    {skill.icon}
                  </div>
                  <span className="text-[10px] uppercase tracking-wider font-mono text-zinc-400 group-hover:text-white">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* About Info Grid */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {about.info.map((info, idx) => (
            <div key={idx} className="bg-[#08080c] border border-white/5 rounded-lg p-4 flex items-center justify-between">
              <span className="text-zinc-500 text-sm">{info.fieldName}</span>
              <span className="text-white font-mono text-sm">{info.fieldValue}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Resume;
