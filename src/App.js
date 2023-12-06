import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./Loader/Loader.jsx";
import Layout from "./component/Layoyt/Layout.jsx";
import Projects from "./component/Projects/Projects.jsx";
import Gallery from "./component/Gallery/Gallery.jsx";
import Certifications from "./component/Certifications/Certifications.jsx";
import ContactUs from "./component/Contact us/Contact.jsx";
import Navbar from "./component/Navbar/Navbar.jsx";
import Footer from "./component/Footer/Footer.jsx";
import CookieConsent from "react-cookie-consent";
import ScrollToTop from "./Scrolltotop.jsx";
import Error from "./Error.js";
import Login from "./LoginSignup/Login.jsx";
import Terms from "./component/TermAndConditions/Terms.jsx";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Router>
          <ScrollToTop />
          <div className="App">
            <CookieConsent
              location="bottom"
              buttonText="I understand"
              cookieName="myCookieConsent"
              style={{ background: "#ffffff" ,color:"black"}}
              buttonStyle={{ background: "#ffd300", fontSize: "13px",color:"000000" }}
              expires={365}
            >
              This website uses cookies to enhance the user experience.
            </CookieConsent>
          </div>
          {/* <Navbar/> */}
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/terms&conditions" element={<Terms />} />
            <Route path="*" element={<Error />} />
            
          </Routes>
          {/* <Footer/> */}
        </Router>
      )}
    </>
  );
}

export default App;
