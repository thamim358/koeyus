import React,{useEffect} from "react";
import Header from "../Header/Header";
import AboutUs from "../About Us/About Us";
import Footer from "../Footer/Footer";
import NavBar from "../Navbar/Navbar";
import CardCarousel from "../Carosel/Carosel";
import Offer from "../Offer/Offer";

function Layout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    
    <>
    
    <div className="">
      {/* <NavBar/> */}
      <Header/>
      <AboutUs/>
      <CardCarousel/>
      <Offer/>
      <Footer/>
      </div>
    </>
  );
}

export default Layout;
