import { Button } from "./Component/ul/button.jsx";
import { FiDownload } from "react-icons/fi";
import Social from "./Component/Social";
import Photo from "./Component/Photo";
import Stats from "./Component/Stats";

const Home = () => {
  return (
    <section className="xl:px-20 px-5">
      <div className="">
        <div className="flex flex-col xl:flex-row items-center xl:gap-5 justify-between xl:pt-8 xl:pb-20">
          <div className="text-center flex xl:text-left flex-col gap-6">
            <span className="text-xl">Fullstack developer</span>
            <p className="text-4xl xl:text-7xl gap-3 flex flex-col font-bold  ">
              <span> Hello I&apos;m</span>
              <span className="text-accent ">Divyadharshana</span>
            </p>
            <p className="max-w-[500px]  text-white ">
              Full-Stack Developer | Problem Solver | Tech Explorer Crafting
              elegant frontends and powerful backends — I build seamless digital
              experiences from pixel to production. With a passion for clean
              code, scalable systems, and human-centered design, I turn ideas
              into performant, user-friendly web applications.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-5">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-4 text-accent hover:text-white rounded-full"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-3"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center  text-accent text-base hover:bg-accent
                  hover:text-white hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div>
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
