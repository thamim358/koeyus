import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loader from './Loader/Loader.jsx';
import Layout from './component/Layoyt/Layout.jsx';
import Projects from './component/Projects/Projects.jsx';
import Gallery from './component/Gallery/Gallery.jsx';
import Certifications from './component/Certifications/Certifications.jsx';
import ContactUs from './component/Contact us/Contact.jsx';
import Navbar from './component/Navbar/Navbar.jsx';
import Footer from './component/Footer/Footer.jsx';
import ScrollToTop from './Scrolltotop.jsx';
import Error from './Error.js';

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
        <Loader/> 
      ) : (
        <Router>
                <ScrollToTop />

        {/* <Navbar/> */}
          <Routes>
            <Route path="/" element={<Layout  />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/certifications' element={<Certifications />} />
            <Route path='/contactus' element={<ContactUs />} />
            <Route path='*' element={<Error />} />
          </Routes>
          {/* <Footer/> */}
        </Router>
       )} 
    </>
  );
}

export default App;
