import React, { useEffect } from "react";
import "./Aboutus.scss"
import frame from "../img/Frame 14.png";
import WOW from "wow.js";
import { useNavigate } from "react-router-dom";
import {
    IconArrowElbowRight,
  } from "@tabler/icons-react";
  import left from "../img/26.png"
  import right from "../img/Shape296.png"
export const AboutUs = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);
  const handleChange = (value) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/about");
  };
  return (
    <>
    {/* <div className=" p-3">
        <img src={right} alt="Side Image" className="photos" />
      </div> */}
      <div className="section" id="aboutsection"          style={{ textAlign: "justify", textJustify: "auto" }}>
        
        <div className="py-10 sm:px-2">
          <div className="p-10 flex flex-col lg:flex-row justify-between items-start lg:items-center">
            <div className="image">
              <img
                className=" mt-4 lg:mt-8 h-96 mb-4 lg:mb-8 rounded-2xl wow fadeInUp"
                src={frame}
                alt="Logo Image"
              />
            </div>
  
            <div className="w-full lg:w-3/5 flex flex-col p-6 justify-start items-start lg:items-end  ">
              <div className="text-4xl text-black font-bold mb-1 lg:mb-3 self-start  wow fadeInUp">
             About Us
              </div>
              <div className="text-medium text-[#7B7B7B] font-normal leading-relaxed  lg:mb-3 wow fadeInUp">
              At Koeus, we believe in the transformative power of exceptional design and architecture. As a pioneering firm in the industry, we have been redefining spaces and creating innovative designs that resonate with functionality, aesthetics, and sustainability.
              </div>
              <div className="  ">
              <div className="text-2xl text-black font-bold  lg:mb-2 self-start  wow fadeInUp">
             Our Vision
              </div>
              <div className="text-medium text-[#7B7B7B] font-normal leading-relaxed  lg:mb-3 wow fadeInUp">
              Our vision is to craft spaces that inspire, elevate experiences, and stand the test of time. We strive to push boundaries, embrace creativity, and deliver unparalleled design solutions that exceed our clients' expectations.
              </div>
              <div className="text-2xl text-black font-bold mb-2 lg:mb-3 self-start  wow fadeInUp">
             Our Mission
              </div>
              <div className="text-medium text-[#7B7B7B] font-normal leading-relaxed  lg:mb-6 wow fadeInUp">
              We are dedicated to creating spaces that transcend mere structures, evoking emotions and leaving a lasting impact. Our mission is to continue setting new benchmarks in design excellence, pushing the boundaries of innovation while maintaining a steadfast commitment to quality and client satisfaction.
              </div>
            
            
            </div>
              
            </div>
        
          
             
           
          </div>
        </div>
      </div>
    </>
   
  );
};

export default AboutUs;
