import React, { useEffect } from "react";
import WOW from "wow.js";
import design from "../img/design.jpg";
import commercial from "../img/commercial.jpg";
import bunglow from "../img/bunglow.jpg";
import club from "../img/club.jpg";
import residentialInterior from "../img/residentialInterior.jpg";
import retailInterior from "../img/retailInterior.jpg";
import corporateInterior from "../img/corporateInterior.jpg";
import designBuild from "../img/designBuild.jpg";
import feasibilityImage from "../img/feasibilityImage.png";
import tenderImage from "../img/tenderImage.jpg";
import tenderdoc from "../img/tenderdoc.png";
import mepCoordinationImage from "../img/mepCoordinationImage.jpg";
import { IconChartPie3, IconPhoneCall } from "@tabler/icons-react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import { IconHourglassEmpty } from "@tabler/icons-react";
import { IconBuildingCommunity } from "@tabler/icons-react";

function Services() {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);
  const projectData = [
    {
      title: " Design Residential apartments",
      description:
        "Crafting bespoke living spaces that blend functionality with aesthetics, tailored to individual lifestyles and preferences, ensuring a harmonious balance between comfort and style. ",
      imageSrc: design,
    },
    {
      title: "Design Commercial Buildings",
      description:
        "Conceptualizing commercial structures that align with business objectives, combining innovative design elements with practicality to foster productivity and appeal.",
      imageSrc: commercial,
    },
    {
      title: "Bunglows",
      description:
        "Creating distinctive, personalized bungalow designs that reflect individual tastes and aspirations, harmonizing modern amenities with timeless architectural elegance. ",
      imageSrc: bunglow,
    },
    {
      title: "Clubhouse",
      description:
        " Crafting exclusive clubhouses that serve as hubs of leisure and community, integrating  with functional spaces to enhance social experiences and relaxation.",
      imageSrc: club,
    },

    // Add more objects as needed
  ];
  const interiorDesignData = [
    {
      title: "Residential Interiors",
      description:
        "Crafting personalized interiors that reflect the essence of home, merging functionality with aesthetic appeal to create spaces of comfort and individuality.",
      imageSrc: residentialInterior,
    },
    {
      title: "Retail Interiors",
      description:
        "Designing captivating retail spaces that elevate brand identity, optimizing layouts and aesthetics to entice customers and enhance the shopping experience.",
      imageSrc: retailInterior,
    },
    {
      title: "Corporate Interiors",
      description:
        "Tailoring professional spaces to align with corporate ethos, combining sophistication with functionality to foster productivity and a conducive work environment.",
      imageSrc: corporateInterior,
    },
    {
      title: "Design & Build Projects",
      description:
        "Providing end-to-end design and construction services, ensuring seamless integration of vision, planning, and execution for comprehensive project realization.",
      imageSrc: designBuild,
    },
    // Add more objects as needed
  ];
  const liasoningData = [
    {
      title: "MCGM Liasoning",
      description:
        "Navigating the intricacies of Mumbai's Municipal Corporation (MCGM), ensuring compliance and regulatory approvals for seamless project execution.",
      imageSrc: <IconChartPie3 size={40}/>,
    },
    {
      title: "MHADA Liasoning",
      description:
        "Facilitating interactions with the Maharashtra Housing and Area Development Authority (MHADA), ensuring adherence to regulations for smooth project progression.",
      imageSrc: <IconBuildingCommunity size={40} />,    
    },
    {
      title: "SRA Liasoning",
      description:
        "Managing engagements with the Slum Rehabilitation Authority (SRA), ensuring compliance and efficient navigation of redevelopment regulations for project success.",
      imageSrc: <IconHourglassEmpty size={40} />,
    },
    // Add more objects as needed
  ];
  const pmcData = [
    {
      title: "Project Feasibility",
      description:
        "Thoroughly assessing project viability, conducting comprehensive evaluations to determine feasibility and potential success before project initiation.",
      imageSrc: feasibilityImage,
    },
    {
      title: "Tender Management",
      description:
        "Facilitating the tendering process, ensuring precision and accuracy in vendor selections and bids for optimal project outcomes.",
      imageSrc: tenderImage,
    },
    {
      title: "Tender Documentation",
      description:
        "Preparing detailed and comprehensive tender documentation, ensuring clarity and accuracy in project specifications for efficient contractor engagement.",
      imageSrc: tenderdoc,
    },
    {
      title: "M.E.P Project Coordination",
      description:
        "Overseeing Mechanical, Electrical, and Plumbing (M.E.P) aspects, ensuring seamless coordination and integration within the project framework for efficiency and functionality.",
      imageSrc: mepCoordinationImage,
    },
    // Add more objects as needed
  ];
  
  return (
    <>
    <Navbar/>
      <div className="section" id="project">
        <div className="Name  text-5xl text-[#FFBF00] mt-5 font-Achi pt-5 font-bold text-center wow fadeInUp">
          Services
        </div>
        <div className="">
        <div className=" text-3xl uppercase text-gray-500 mt-5 pt-5 font-bold text-start  wow fadeInUp ml-12">
          Architecture
        </div>
        <div className="flex flex-wrap justify-center mt-5 wow fadeInUp mx-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-4 gap-5">
            {projectData.map((project, index) => (
              <div className="flex" key={index}>
                <div
                  className="bg-white  rounded-xl drop-shadow-2xl"
                  style={{ borderRadius: "20px" }}
                >
                  <div className="relative ">
                    <img
                      src={project.imageSrc}
                      alt={project.title}
                      className="w-full h-40 p-3  "
                      style={{ borderRadius: "30px" }}
                    />
                  </div>
                  <div className="p-3 ml-4">
                    <h3 className="text-lg font-semibold text-black wow fadeInUp">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mt-2 wow fadeInUp">
                      {project.description}
                    </p>
                    <div className="flex justify-between items-center mt-4 wow fadeInUp">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        <Link to="/contactus">
                        <IconPhoneCall
                          className="text-gray-400  transform transition duration-500 hover:scale-125"
                          size={30}
                          style={{ color: "#FFBF00" }}
                        />
                        </Link>
                        
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
        <div className="mt-5">
        <div className=" text-3xl uppercase text-gray-500 mt-5 pt-5 font-bold text-start  wow fadeInUp ml-12">
        Interior Design
        </div>
        <div className="flex flex-wrap justify-center mt-5 wow fadeInUp mx-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-4 gap-5">
            {interiorDesignData.map((project, index) => (
              <div className="flex" key={index}>
                <div
                  className="bg-white  rounded-xl drop-shadow-2xl"
                  style={{ borderRadius: "20px" }}
                >
                  <div className="relative ">
                    <img
                      src={project.imageSrc}
                      alt={project.title}
                      className="w-full h-40 p-3  "
                      style={{ borderRadius: "30px" }}
                    />
                  </div>
                  <div className="p-3 ml-4">
                    <h3 className="text-lg font-semibold text-black wow fadeInUp">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mt-2 wow fadeInUp">
                      {project.description}
                    </p>
                    <div className="flex justify-between items-center mt-4 wow fadeInUp">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        <Link to="/contactus">
                        <IconPhoneCall
                          className="text-gray-400  transform transition duration-500 hover:scale-125"
                          size={30}
                          style={{ color: "#FFBF00" }}
                        />
                        </Link>
                        
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
        <div className="mt-5">
        <div className=" text-3xl uppercase text-gray-500 mt-5 pt-5 font-bold text-start  wow fadeInUp ml-12">
        Liasoning 
        </div>
        <div className="flex flex-wrap justify-center mt-5 wow fadeInUp mx-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-3 gap-5">
            {liasoningData.map((project, index) => (
              <div className="flex" key={index}>
                <div
                  className="bg-white  rounded-xl drop-shadow-2xl"
                  style={{ borderRadius: "20px" }}
                >
                  <div className="relative ">
                    <div className="p-5">  
                     {project.imageSrc}
                     </div>
                  </div>
                  <div className="p-3 ml-4">
                    <h3 className="text-lg font-semibold text-black wow fadeInUp">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mt-2 wow fadeInUp">
                      {project.description}
                    </p>
                    <div className="flex justify-between items-center mt-4 wow fadeInUp">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        <Link to="/contactus">
                        <IconPhoneCall
                          className="text-gray-400  transform transition duration-500 hover:scale-125"
                          size={30}
                          style={{ color: "#FFBF00" }}
                        />
                        </Link>
                        
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
        <div className="mt-5">
        <div className=" text-3xl uppercase text-gray-500 mt-5 pt-5 font-bold text-start  wow fadeInUp ml-12">
        P.M.C (Project Management Consultancy)
        </div>
        <div className="flex flex-wrap justify-center mt-5 wow fadeInUp mx-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-4 gap-5">
            {pmcData.map((project, index) => (
              <div className="flex" key={index}>
                <div
                  className="bg-white  rounded-xl drop-shadow-2xl"
                  style={{ borderRadius: "20px" }}
                >
                  <div className="relative ">
                    <img
                      src={project.imageSrc}
                      alt={project.title}
                      className="w-full h-40 p-3  "
                      style={{ borderRadius: "30px" }}
                    />
                  </div>
                  <div className="p-3 ml-4">
                    <h3 className="text-lg font-semibold text-black wow fadeInUp">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mt-2 wow fadeInUp">
                      {project.description}
                    </p>
                    <div className="flex justify-between items-center mt-4 wow fadeInUp">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        <Link to="/contactus">
                        <IconPhoneCall
                          className="text-gray-400  transform transition duration-500 hover:scale-125"
                          size={30}
                          style={{ color: "#FFBF00" }}
                        />
                        </Link>
                        
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Services;
