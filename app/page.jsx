"use client";
import { Button } from "./Component/ul/button.jsx";
import { FiDownload } from "react-icons/fi";
import Social from "./Component/Social";
import Photo from "./Component/Photo";
import Stats from "./Component/Stats";

const Home = () => {
  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = "/Dharshana_Resume.pdf";
    a.setAttribute("download", "Dharshana_Resume.pdf");
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <section className="relative min-h-[100svh] flex items-center xl:px-20 px-5 pt-20 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-violet/20 rounded-full blur-[100px] -z-10 animate-pulse delay-700" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent-cyan/10 rounded-full blur-[120px] -z-10" />

      <div className="w-full">
        <div className="flex flex-col xl:flex-row items-center xl:gap-14 justify-between xl:py-24">
          <div className="text-center flex xl:text-left flex-col gap-6 z-10 w-full xl:w-2/3">
            <span className="text-accent font-mono text-sm tracking-wide animate-fade-up" style={{ animationDelay: '0ms' }}>
              Divyadharshana · Fullstack Developer → Tech Explorer
            </span>
            <h1 className="text-[2.6rem] sm:text-5xl xl:text-7xl font-semibold leading-[1.05] tracking-tight text-white animate-fade-up" style={{ animationDelay: '100ms' }}>
              Building <span className="grad-text">AI & Web</span><br/>Infrastructure
            </h1>
            <ul className="animate-fade-up mt-4 space-y-2" style={{ animationDelay: '200ms' }}>
              <li className="flex items-center gap-3 text-base text-zinc-300 sm:text-lg justify-center xl:justify-start">
                <span className="h-px w-6 bg-gradient-to-r from-accent to-accent-cyan"></span>
                Java & MERN Stack
              </li>
              <li className="flex items-center gap-3 text-base text-zinc-300 sm:text-lg justify-center xl:justify-start">
                <span className="h-px w-6 bg-gradient-to-r from-accent to-accent-cyan"></span>
                Scalable Web Applications
              </li>
              <li className="flex items-center gap-3 text-base text-zinc-300 sm:text-lg justify-center xl:justify-start">
                <span className="h-px w-6 bg-gradient-to-r from-accent to-accent-cyan"></span>
                Problem Solver
              </li>
            </ul>
            <p className="max-w-[600px] text-base leading-relaxed text-zinc-500 mx-auto xl:mx-0 animate-fade-up" style={{ animationDelay: '300ms' }}>
              Crafting scalable web applications with clean code, strong backend logic, and intuitive user experiences. I build end-to-end digital solutions using Java, Spring Boot, REST APIs, MongoDB, Express, React, and Node.js.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-5 mt-4 animate-fade-up" style={{ animationDelay: '400ms' }}>
              <Button
                variant="outline"
                size="lg"
                onClick={handleDownload}
                className="uppercase flex items-center gap-4 border-accent text-accent hover:bg-accent hover:text-black transition-all rounded-full"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-3"
                  iconStyles="w-9 h-9 border border-zinc-700 rounded-full flex justify-center items-center text-zinc-400 text-base hover:border-accent hover:text-accent hover:shadow-[0_0_15px_rgba(0,255,153,0.3)] hover:transition-all duration-300"
                />
              </div>
            </div>
          </div>
          
          <div className="animate-fade-up z-10 xl:w-1/3" style={{ animationDelay: '250ms' }}>
            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-accent/30 to-accent-cyan/30 blur-2xl z-0"></div>
              <div className="relative z-10 transition-transform duration-300 hover:scale-[1.02]">
                <Photo />
              </div>
            </div>
          </div>
        </div>
        
        <div className="animate-fade-up mt-10" style={{ animationDelay: '500ms' }}>
          <Stats />
        </div>
      </div>
    </section>
  );
};

export default Home;
