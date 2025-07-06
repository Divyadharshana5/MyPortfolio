"use client";
import { useEffect, useState } from "react";
import Countup from "react-countup";

const Stats = () => {
  const [commits, setCommits] = useState(null);
  const stats = [
    {
      num: 1,
      text: "Year of experience",
    },
    {
      num: 20,
      text: "Projects completed",
    },
    {
      num: 5,
      text: "Technologies mastered",
    },
    {
      num: commits,
      text: "Code commits",
    },
  ];

  useEffect(() => {
    const getCommits = async () => {
      const res = await fetch("/api/total-commits");
      const data = await res.json();
      setCommits(data.totalLastYear);
    };

    getCommits();
  }, []);

  console.log("commits", commits);

  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[83vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                key={index}
              >
                <Countup
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={` ${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } text-white/80 leading-snug`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
