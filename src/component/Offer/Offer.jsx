import React, { useEffect } from "react";
import WOW from "wow.js";
import { IconBrandDatabricks } from "@tabler/icons-react";

export const Offer = () => {

  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  return (
    <section id="do">
      <div
        className="section pb-10"
        id="whyme"
        style={{ textAlign: "justify", textJustify: "auto" }}
      >
        <div className="">
          <p className="text-4xl sm:text-4xl lg:text-5xl text-[#FFBF00] font-Achi font-bold text-center wow fadeInUp pt-4">
            What we offer
          </p>
          <div className="flex justify-center h-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 sm:mt-10 lg:mt-12">
              <div className="shadow-xl rounded-xl p-3 sm:p-5 mx-auto wow fadeInUp flex flex-col items-center">
                <IconBrandDatabricks size={40} className="text-[#FFBF00]" />
                <div className="text-black font-semibold text-center mt-2">
                  Innovative Design
                </div>
              </div>

              <div className="shadow-xl rounded-xl p-3 sm:p-5 mx-auto wow fadeInUp flex flex-col items-center">
                <IconBrandDatabricks size={40} className="text-[#FFBF00]" />
                <div className="text-black font-semibold text-center mt-2">
                  Sustainable Practices
                </div>
              </div>

              <div className="shadow-xl rounded-xl p-3 sm:p-5 mx-auto wow fadeInUp flex flex-col items-center">
                <IconBrandDatabricks size={40} className="text-[#FFBF00]" />
                <div className="text-black font-semibold text-center mt-2">
                  Client-Centric Approach
                </div>
              </div>

              <div className="shadow-xl rounded-xl p-3 sm:p-5 mx-auto wow fadeInUp flex flex-col items-center">
                <IconBrandDatabricks size={40} className="text-[#FFBF00]" />
                <div className="text-black font-semibold text-center mt-2">
                  Expertise in Architecture
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
