import React, { useEffect } from "react";
import WOW from "wow.js";
import { Link } from "react-router-dom";
import { Tabs } from "antd";
import "./Header.scss";
import logo from "../img/logo6.png";

const { TabPane } = Tabs;

function Header() {

  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);
  const text = "KOYEUS";
  return (
    <>
      <section id="home ">
        <section className="bg-center bg-no-repeat dashboard bg-blend-darken relative">
          <header className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center p-2">
              <img src={logo} alt="wdwd" className="h-14 brightness-200" />
            </div>
            <div className="sm:hidden md:hidden lg:block">
              {text.split("").map((letter, index) => (
                <div
                  key={index}
                  className={`inline-block wow bounceInLeft`}
                  data-wow-delay={`${index * 0.4}s`}
                >
                  <span className="text-4xl font-bold text-white font-mono leading-9 block sm:hidden lg:block">
                    {letter}
                  </span>
                </div>
              ))}
            </div>
          </header>
          <div className="px-4 py-20 lg:p-20 lg:py-40 ">
            <h1 className="mb-4 text-4xl font-bold tracking-tight wow zoomIn leading-none text-white md:text-5xl lg:text-6xl"  data-wow-duration="2s">
              Welcome to koyeus
            </h1>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight wow flipInX leading-none text-white md:text-5xl lg:text-6xl" data-wow-duration="4s">
              Empowering Innovation & Growth
            </h1>

            <div
              className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 items-center"
              style={{ fontWeight: "800px" }}
            >
              {/* Row of circles */}
              {/* <Link to="/link1"> */}
                <div
                  className="circle bg-[#ffd300]  w-28 h-28  flex items-center justify-center   rounded-full mr-4 wow bounceInRight p-4 transition duration-500 transform hover:scale-125 "
                  data-wow-duration="3s"
                >
                  <div className="text-center text-black font-bold ">
                    Architecture Design
                  </div>
                </div>
              {/* </Link> */}
              {/* <Link to="/link2"> */}
                <div
                  className="circle bg-[#ffd300] w-28 h-28 flex items-center  justify-center  rounded-full mr-4 wow bounceInLeft p-4 transition duration-500 transform hover:scale-125"
                  data-wow-duration="4s"
                >
                  <div className="text-center text-black font-bold">
                    Interior Design
                  </div>
                </div>
              {/* </Link> */}
              {/* <Link to="/link3"> */}
                <div
                  className="circle bg-[#ffd300]  w-28 h-28 flex items-center justify-center rounded-full mr-4 wow bounceInRight transition duration-500 transform hover:scale-125"
                  data-wow-duration="3s"
                >
                  <div className="text-center text-black font-bold">
                    TDD & PM
                  </div>
                </div>
              {/* /</Link> */}
              {/* <Link to="/link4"> */}
                <div
                  className="circle bg-[#ffd300]  w-28 h-28 flex items-center justify-center  rounded-full mr-4 wow bounceInLeft transition duration-500 transform hover:scale-125"
                  data-wow-duration="4s"
                >
                  <div className="text-center text-black font-bold">
                    Consultation
                  </div>
                </div>
              {/* </Link> */}
            </div>
          </div>
          {/* Column of circles */}
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2 mt-0 lg:-mt-5  sm:mt-10">
            {/* <Link to="/link5"> */}
              <div
                className="circle bg-[#ffd300] w-16 h-16 flex items-center  justify-center  rounded-full mb-4 wow zoomInDown transition duration-500 transform hover:scale-125"
                data-wow-duration="4s"
              >
                <div className="text-center text-white font-bold">AD</div>
              </div>
            {/* </Link> */}
            {/* <Link to="/link6"> */}
              <div
                className="circle bg-[#ffd300] w-16 h-16 flex items-center  justify-center  rounded-full mb-4 wow zoomInDown transition duration-500 transform hover:scale-125"
                data-wow-duration="3s"
              >
                <div className="text-center text-white font-bold">ID</div>
              </div>
            {/* </Link> */}
            {/* <Link to="/link7"> */}
              <div
                className="circle bg-[#ffd300] w-16 h-16 flex items-center  justify-center  rounded-full mb-4 wow zoomInDown transition duration-500 transform hover:scale-125"
                data-wow-duration="2s"
              >
                <div className="text-center text-white font-bold">T/P</div>
              </div>
            {/* </Link> */}
            {/* <Link to="/link8"> */}
              <div
                className="circle bg-[#ffd300] w-16 h-16 flex items-center  justify-center  rounded-full mb-4 wow zoomInDown transition duration-500 transform hover:scale-125"
                data-wow-duration="1s"
              >
                <div className=" text-white font-bold">CON</div>
              </div>
            {/* </Link> */}
          </div>
        </section>
      </section>
    </>
  );
}

export default Header;
