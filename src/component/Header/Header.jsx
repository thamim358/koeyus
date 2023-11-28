import React, { useState, useEffect, useRef } from "react";
import WOW from "wow.js";
import { Link as Links } from "react-router-dom";
import { Tabs } from "antd";
import "./Header.scss";

const { TabPane } = Tabs;

function Header() {
  const textShadowStyle = {
    textShadow: "4px 2px 6px rgba(0, 0, 0, 0.3)", // Adjusted shadow values
  };
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  return (
    <>
      <section id="home">
        <section className="bg-center bg-no-repeat dashboard bg-blend-darken">
          <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-44">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
              Welcome to koyeus
            </h1>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
              Empowering Innovation & Growth
            </h1>
            <p className="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 lg:px-48">
            Where innovation meets design excellence. Our passion lies in crafting spaces that transcend functionality and aesthetics, creating architectural marvels that stand as timeless reflections of vision and craftsmanship
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
              <Links
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-black hover:bg-gray-900 focus:ring-4 "
                to="/contactus"
              >
                Contact us{" "}
                <svg
                  className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Links>
            </div>
          </div>
        </section>
      </section>

      {/* </div> */}
    </>
  );
}

export default Header;
