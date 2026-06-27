"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const service = [
  {
    num: "01",
    title: "Full‑Stack Web Application Development",
    description:
      "Design and implement responsive web applications using React or Next.js on the frontend, and Node.js or Go on the backend. I build clean architectures, integrate databases like MongoDB or PostgreSQL, and deliver solid, user-friendly digital solutions.",
    href: "",
  },
  {
    num: "02",
    title: " Social-Web Browser Extension & Web Recommendation",
    description:
      "Build interactive browser extensions like your Social‑Browser‑Extension project that deliver personalized content recommendations and enhance user browsing experiences. Skilled in frontend technologies (JavaScript, HTML, CSS) and background scripting, I bring seamless functionality to browser tools.",
    href: "",
  },
  {
    num: "03",
    title: " Custom eCommerce Web Development",
    description:
      "Build end-to-end eCommerce platforms tailored to specific business needs. From product listings, cart functionalities, and secure user authentication to seamless checkout systems, I develop responsive and scalable apps using the MERN stack (MongoDB, Express, React, Node.js).",
    href: "",
  },
  {
    num: "04",
    title: " Deployment, CI/CD & Performance Tuning",
    description:
      "Deployed apps using Vercel, Render, and Netlify with optimized builds and CI/CD workflows. Applied lazy loading, bundle analysis, and Lighthouse audits to enhance speed & SEO. Focused on HTTPS, JWT security, and 404 fallback routing.",
    href: "",
  },
  {
    num: "05",
    title: "Enterprise Backend & Full-Stack Solutions",
    description:
      "Architecting robust enterprise applications using Java and Spring Boot. Building scalable, end-to-end applications with the complete MERN Stack. Proficient in database design using both SQL and MongoDB, and managing robust version control workflows via GitHub.",
    href: "",
  },
];
import { motion } from "framer-motion";
const Service = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-10" />
      <div className="container mx-auto z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.2, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {service.map((item, index) => {
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                key={index}
                className="flex-1 flex flex-col justify-between gap-6 group bg-white/[0.02] border border-white/10 hover:border-accent/30 rounded-2xl p-8 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,153,0.1)] relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent to-accent-cyan opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:grad-text transition-all duration-500 font-mono">
                    {item.num}
                  </div>
                  <Link
                    href={item.href || "#"}
                    className="w-12 h-12 rounded-full bg-white/5 border border-white/10 group-hover:border-accent group-hover:bg-accent/10 transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-white group-hover:text-accent text-xl transition-all" />
                  </Link>
                </div>
                <div>
                  <h2 className="text-2xl font-bold leading-tight text-white mb-4 group-hover:text-accent transition-all duration-500">
                    {item.title}
                  </h2>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Service;
