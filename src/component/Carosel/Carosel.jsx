import React, { useEffect, useRef } from "react";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import Splide from "@splidejs/splide";
import WOW from "wow.js";

import arch1 from "../img/arch1.jpg";
import arch2 from "../img/arch2.jpg";
import arch3 from "../img/arch3.jpg";
import arch4 from "../img/arch4.jpg";
import arch5 from "../img/arch5.jpg";
import { Image } from "antd";

function CardCarousel() {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  const splideRef = useRef(null);

  useEffect(() => {
    if (splideRef.current) {
      const splide = new Splide(splideRef.current, {
        type: "loop",
        drag: "free",
        focus: "center",
        perPage: 3,
        autoScroll: {
          speed: 1,
        },
      });

      splide.mount();

      return () => {
        splide.destroy();
      };
    }
  }, []);

  return (
    <section className="contact space" id="contactme">
      <div className="lg:px-12 pb-10 sm:p-10 p-10">
        <div className="text-4xl sm:text-4xl lg:text-5xl text-[#ffd300] font-mono self-start font-bold mb-5">
          Our Projects
        </div>
        <div className="p-4">
          <div ref={splideRef} className="splide">
            <div className="splide__track">
              <ul className="splide__list">
                <li className="splide__slide">
                  <Image
                    className="w-full h-full object-cover"
                    src={arch1}
                    alt="Project 1"
                  />
                </li>
                <li className="splide__slide">
                  <Image
                    className="w-full h-full object-cover"
                    src={arch2}
                    alt="Project 2"
                  />
                </li>
                <li className="splide__slide">
                  <Image
                    className="w-full h-full object-cover"
                    src={arch3}
                    alt="Project 3"
                  />
                </li>
                <li className="splide__slide">
                  <Image
                    className="w-full h-full object-cover"
                    src={arch4}
                    alt="Project 1"
                  />
                </li>
                <li className="splide__slide">
                  <Image
                    className="w-full h-full object-cover"
                    src={arch5}
                    alt="Project 1"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardCarousel;
