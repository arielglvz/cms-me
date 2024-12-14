import React, { useState } from "react";
import { courses } from "../../resources/courses";
import SectionTitle from "../../components/SectionTitle";

const Courses = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  return (
    <div>
      <SectionTitle title="Projects" />
      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {courses.map((project, index) => (
            <div
              className="cursor-pointer"
              key={project._id}
              onClick={() => setSelectedItemIndex(index)}
            >
              <h1
                className={`text-xl px-5
                  ${
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
          <div className="flex flex-col gap-5">
            <h1 className="text-secondary text-xl">
              {courses[selectedItemIndex].title}
            </h1>
            <p className="text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima,
              harum debitis quibusdam voluptatem quos architecto quia voluptate
              vitae iusto nulla. Nisi repellat a facere numquam cumque provident
              accusamus, corrupti mollitia.
            </p>
          </div>

          <img 
            src={courses[selectedItemIndex].image} 
            alt={courses[selectedItemIndex].title} 
            className="h-52 w-80"
          />
        </div>
      </div>
    </div>
  );
};

export default Courses;
