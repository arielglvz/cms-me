import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

const Projects = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const { loading, portfolioData } = useSelector((state) => state.root)
  const { projects } = portfolioData

  return (
    <div>
      <SectionTitle title="Projects" />
      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {projects.map((project, index) => (
            <div
              className="cursor-pointer"
              key={index}
              onClick={() => setSelectedItemIndex(index)}
            >
              <h1
                className={`text-xl px-5 whitespace-nowrap ${
                    selectedItemIndex === index
                      ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3 sm:w-full"
                      : "text-white"
                  }`}
              >
                {project.title}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-10 sm:flex-col">
          <img src={projects[selectedItemIndex].image} alt={projects[selectedItemIndex].title} className="h-60 w-72"/>

          <div className="flex flex-col gap-5">
            <h1 className="text-secondary text-xl">
              {projects[selectedItemIndex].title}
            </h1>
            <p className="text-white">
              {projects[selectedItemIndex].description}
            </p>
            <p className="text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima,
              harum debitis quibusdam voluptatem quos architecto quia voluptate
              vitae iusto nulla. Nisi repellat a facere numquam cumque provident
              accusamus, corrupti mollitia Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, expedita.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
