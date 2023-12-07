import React, { useEffect } from "react";
import WOW from "wow.js";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export const Terms = () => {


  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);



  return (
    <>
    <Navbar/>
      <section id="do">
      <div
        className="section pb-10 min-h-screen p-6"
        id="whyme"
        style={{ textAlign: "justify", textJustify: "auto" }}
      >
        <div className="max-w-4xl mx-auto bg-white p-8 rounded shadow-md">
          <p className="text-4xl sm:text-4xl lg:text-5xl text-[#FFBF00] font-Achi font-bold text-center wow fadeInUp pt-4 ">
            Terms And Conditions
          </p>
          <div className="">

            <p className="mt-6 text-gray-500 text-base  wow fadeInUp">
              Welcome to Koyeus, your trusted partner in Architecture and
              Interior Design. By using our services, you agree to comply with
              and be bound by the following terms and conditions:
            </p>

            <h2 className="mt-6 text-black font-bold text-xl  wow fadeInUp">1. Acceptance of Terms</h2>
            <p className="mt-1 text-gray-500 text-base  wow fadeInUp">
              By accessing or using the services provided by Koyeus, you agree
              to comply with and be bound by these terms and conditions. If you
              do not agree to these terms, please do not use our services.
            </p>

            <h2 className="mt-6 text-black  font-bold text-xl  wow fadeInUp">2. Services</h2>
            <p className="mt-1 text-gray-500 text-base  wow fadeInUp">
              Koyeus offers a range of architecture and interior design
              services. The specific details, including pricing, timelines, and
              deliverables, will be outlined in a separate contract or agreement
              between Koyeus and the client.
            </p>

            <h2 className="mt-6 text-black  font-bold text-xl  wow fadeInUp">3. Client Responsibilities</h2>
            <p className="mt-1 text-gray-500 text-base  wow fadeInUp">
              Clients are responsible for providing accurate and timely
              information required for the design process. Delays in providing
              necessary feedback or information may result in project timeline
              extensions.
            </p>

            <h2 className="mt-6 text-black  font-bold text-xl  wow fadeInUp">4. Payment</h2>
            <p className="mt-1 text-gray-500 text-base  wow fadeInUp">
              Payment terms will be outlined in the project agreement. Clients
              are required to adhere to the payment schedule specified in the
              agreement. Failure to make timely payments may result in the
              suspension of services.
            </p>

            <h2 className="mt-6 text-black  font-bold text-xl  wow fadeInUp">5. Intellectual Property</h2>
            <p className="mt-1 text-gray-500 text-base  wow fadeInUp">
              All designs, drawings, and other materials created by Koyeus are
              the intellectual property of Koyeus. Clients are granted a
              non-exclusive license to use the designs for their intended
              purpose. Unauthorized use, reproduction, or distribution of our
              designs is strictly prohibited.
            </p>

            <h2 className="mt-6 text-black  font-bold text-xl  wow fadeInUp">6. Confidentiality</h2>
            <p className="mt-1 text-gray-500 text-base  wow fadeInUp">
              Koyeus agrees to keep all client information confidential. We will
              not disclose any sensitive information to third parties without
              the client's explicit consent.
            </p>

            <h2 className="mt-6 text-black  font-bold text-xl  wow fadeInUp">7. Changes to Services</h2>
            <p className="mt-1 text-gray-500 text-base  wow fadeInUp">
              Koyeus reserves the right to make changes to the services,
              including pricing and features, with reasonable notice to clients.
              Clients will be informed of any changes that may affect ongoing
              projects.
            </p>

            <h2 className="mt-6 text-black  font-bold text-xl">8. Dispute Resolution</h2>
            <p className="mt-1 text-gray-500 text-base  wow fadeInUp">
              Any disputes arising from or relating to these terms and
              conditions will be resolved through arbitration in accordance with
              the rules of [Arbitration Organization] before resorting to
              litigation.
            </p>

            <h2 className="mt-6 text-black  font-bold text-xl  wow fadeInUp">9. Limitation of Liability</h2>
            <p className="mt-1 text-gray-500 text-base  wow fadeInUp">
              Koyeus is not liable for any indirect, incidental, or
              consequential damages arising from the use of our services. The
              total liability of Koyeus for any claim shall not exceed the total
              amount paid by the client for the specific project.
            </p>

            <h2 className="mt-6 text-black  font-bold text-xl  wow fadeInUp">10. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in
              accordance with the laws of [Your Jurisdiction].
            </p>

            <h2 className="mt-6 text-black  font-bold text-xl  wow fadeInUp">11. Contact Information</h2>
            <p className="mt-1 text-gray-500 text-base  wow fadeInUp">
              If you have any questions or concerns regarding these terms and
              conditions, please contact us at{" "}
              <a href="mailto:Koyeusarchitects@gmail.com">Koyeusarchitects@gmail.com</a>.
            </p>

            <p>These terms and conditions were last updated on [Date].</p>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  
  );
};

export default Terms;
