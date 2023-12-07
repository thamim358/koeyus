import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function Licensing() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen p-6">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded shadow-md">
          <h1 className="text-3xl font-semibold mb-6 text-[#FFBF00]">
            Licensing
          </h1>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">
              1. Licensing Information
            </h2>
            <p>
              At Koyeus, we operate under various licenses and
              certifications to ensure compliance with industry standards and
              regulations. Our licenses include:
            </p>
            <ul className="list-disc pl-6">
              <li>[License/Certification Name 1]</li>
              <li>[License/Certification Name 2]</li>
            </ul>
            <p>
              These licenses and certifications validate our commitment to
              quality, professionalism, and adherence to regulatory requirements
              in the architectural industry.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">
              2. Licensing Compliance
            </h2>
            <p>
              We strictly adhere to the guidelines and standards set forth by
              the regulatory bodies governing the architectural field.
              Compliance with licensing requirements is a fundamental aspect of
              our operations, ensuring that we maintain the highest level of
              professionalism and ethical conduct.
            </p>
            {/* Add more content */}
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p>
              For any inquiries or further information regarding our licensing
              and certifications, please contact us at{" "}
              <a
                href="mailto:Koyeusarchitects@gmail.com"
                className="text-blue-500"
              >
                Koyeusarchitects@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Licensing;
