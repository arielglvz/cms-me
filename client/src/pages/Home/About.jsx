import SectionTitle from "../../components/SectionTitle";

const About = () => {
  const skills = [
    "HTML 5",
    "CSS 3",
    "SCSS",
    "Javascript",
    "React JS",
    "Vue JS",
    "Node",
    "Express",
    "MongoDB",
    "Firebase"
  ]

  return (
    <div>
      <SectionTitle title="About" />
      <div className="flex w-full items-center sm:flex-col">
        <div className="h-[70vh] w-1/2 sm:w-full">
          <dotlottie-player
            src="https://lottie.host/e063a063-a121-49d7-851c-bff17047c510/M1qvV56xbS.lottie"
            background="transparent"
            speed="1"
            autoplay
          ></dotlottie-player>
        </div>
        <div className="flex flex-col gap-5 w-1/2 sm:w-full">
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            fugit cum consectetur quasi libero, saepe dolorum cumque aliquid
            cupiditate quaerat ad adipisci officiis iure. Incidunt quidem
            recusandae natus impedit reiciendis laborum, cupiditate ad eum alias
            aliquid corporis, neque debitis in repudiandae iste harum. Tempore
            quibusdam vero aut dolore. Dolores, magnam.
          </p>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            fugit cum consectetur quasi libero, saepe dolorum cumque aliquid
            cupiditate quaerat ad adipisci officiis iure. Incidunt quidem
            recusandae natus impedit reiciendis laborum, cupiditate ad eum alias
            aliquid corporis, neque debitis in repudiandae iste harum. Tempore
            quibusdam vero aut dolore. Dolores, magnam.
          </p>
        </div>
      </div>

      <div className="py-5">
        <h1 className="text-tertiary text-xl">
          Here are the few technologies I've been working with recently:
        </h1>
        <div className="flex flex-wrap gap-10 mt-5">
          {skills.map((skill, index) => (
            <div key={index} className="border border-tertiary py-3 px-10">
              <h1 className="text-tertiary">{skill}</h1>
            </div> 
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
