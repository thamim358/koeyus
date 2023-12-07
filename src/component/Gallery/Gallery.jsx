import React, { useState, useEffect } from "react";
import design from "../img/design.jpg";
import commercial from "../img/commercial.jpg";
import bunglow from "../img/bunglow.jpg";
import club from "../img/club.jpg";
import residentialInterior from "../img/residentialInterior.jpg";
import retailInterior from "../img/retailInterior.jpg";
import corporateInterior from "../img/corporateInterior.jpg";
import designBuild from "../img/in1 (7).jpg";
import feasibilityImage from "../img/Leonardo_Diffusion_XL_create_a_architecture_image_for_ui_ux_a_0.jpg";
import tenderImage from "../img/in1 (1).jpg";
import tenderdoc from "../img/Leonardo_Diffusion_XL_create_a_architecture_image_for_ui_ux_a_7.jpg";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function Gallery() {
  
  return (
    <>
    <Navbar/>
      <section className="contact space">
        <div className="lg:px-12 pb-10 p-10">
          <div className="text-4xl sm:text-4xl lg:text-5xl  text-[#ffd300] font-mono self-start font-bold mb-5">
            Gallery
          </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="grid gap-4 mb-10">
            <div>
              <img
                className="h-80 max-w-full rounded-lg"
                src={design}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={commercial}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-60 max-w-full rounded-lg"
                src={bunglow}
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-60 max-w-full rounded-lg"
                src={club}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-60 max-w-full rounded-lg"
                src={residentialInterior}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={retailInterior}
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-36 max-w-full rounded-lg"
                src={corporateInterior}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={tenderdoc}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-60 max-w-full rounded-lg"
                src={tenderImage}
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-56 max-w-full rounded-lg"
                src={designBuild}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={feasibilityImage}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={design}
                alt=""
              />
            </div>
          </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default Gallery;
