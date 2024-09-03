"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const service = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium voluptate harum obcaecati odio sapiente aliquid sunt expedita.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium voluptate harum obcaecati odio sapiente aliquid sunt expedita.",
    href: "",
  },
  {
    num: "03",
    title: "Logo Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium voluptate harum obcaecati odio sapiente aliquid sunt expedita.",
    href: "",
  },
  {
    num: "04",
    title: "SEO",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium voluptate harum obcaecati odio sapiente aliquid sunt expedita.",
    href: "",
  },
];
import { motion } from "framer-motion";
const Service = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py12 xl:py-0">
      <div className="container mx-auto">
        service page
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {service.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center ">
                  {/* {service.num} */}
                  <div className="text-5xl font-extrabold text-outline text-transparent">
                    {service.num}
                  </div>
                  <Link href={service.href}>
                    <BsArrowDownRight />
                  </Link>
                </div>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Service;
