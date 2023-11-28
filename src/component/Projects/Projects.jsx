import React from "react";
import arch1 from "../img/arch1.jpg";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const projectsData = [
  {
    id: 1,
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    image: arch1,
  },
  {
    id: 1,
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    image: arch1,
  },
  {
    id: 1,
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    image: arch1,
  },
  {
    id: 1,
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    image: arch1,
  },
];

const Projects = () => {
  return (
    <>
    <Navbar/>
      <section className="contact space p-10" id="contactme">
      <div className="lg:px-12 pb-10">
        <div className="text-4xl sm:text-4xl lg:text-5xl text-black self-start font-bold mb-10">
          Our Projects
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="max-w-sm w-full lg:max-w-full lg:flex"
            >
              <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-lg text-center overflow-hidden">
                <img className="h-full" src={project.image} alt={project.title} />
              </div>
              <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                  <div className="text-gray-900 font-bold text-xl mb-2">
                    {project.title}
                  </div>
                  <p className="text-gray-700 text-base">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer/>
    </>
  
  );
};

export default Projects;
