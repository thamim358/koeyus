import React, { useState, useEffect, useRef } from "react";
import logo from "../img/logo6.png";
import WOW from "wow.js";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Loader from "../../Loader/Loader";
function Navbar() {
  useEffect(() => {
    const wow = new WOW();
   
    wow.init();
  }, []);
  const navigate = useNavigate();

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    document.body.classList.toggle("menu-open");
  };
  

  useEffect(() => {
    const closeMobileMenu = (event) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setMobileMenuOpen(false);
        document.body.classList.remove("menu-open");
      }
    };

    window.addEventListener("click", closeMobileMenu);

    return () => {
      window.removeEventListener("click", closeMobileMenu);
    };
  }, [isMobileMenuOpen]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading delay (remove this in production)
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay as needed

    return () => {
      clearTimeout(timeout);
    };
  }, []);
  const imageStyle = {
    filter: 'grayscale(100%) ',
  };
  return (
    
    <>
        {loading && <Loader />} 
       <header
        id="Home"
        className="sticky  w-full bg-white nav-bar sm:w-full z-10 "
      >
        <div className=" sm:mx-auto md:mx-10 lg:mx-10 flex items-center justify-between py-3 ">
          <div className=" font-black font-mono text-3xl  ml-4">
            {/* SUMADULA */}
            <img src={logo} alt="wdwd" className="h-10 brightness-200"/>
          </div>
          <nav>
            <div className="flex items-center justify-between md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-black flex justify-end ml-10 hover:text-purple-600 focus:outline-none"
              >
                <svg
                  className="w-6 h-6 mx-11"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
            <ul
              className={`${
                isMobileMenuOpen ? "block" : "hidden"
              } md:flex md:space-x-6 tracking-widest justify-between items-center `}
            >
              <li>
                <Link
                  className="text-black  hover:text-[#FF5C00] font-semibold font-sans cursor-pointer"
                  to="/"
                
                >
                   <div className="text-black  hover:text-[#ffd300]">Home</div> 
                </Link>
              </li>
              <li >
                <Link
                  className=" font-semibold font-sans cursor-pointer"
                  to="/"
                >
                   <div className="text-black  hover:text-[#ffd300]">About Us</div> 
                </Link>
              </li>
              <li >
                <Link
                  className=" font-semibold font-sans cursor-pointer"
                  to="/projects"
                  
                >
                  <div className="text-black  hover:text-[#ffd300]">  Projects</div>
               
                </Link>
              </li>
              <li>
                <Link
                  className=" font-semibold font-sans cursor-pointer"
                  to="/certifications"
                  
                >
               <div className="text-black  hover:text-[#ffd300] ">     Certifications</div>
                </Link>
              </li>
              <li>
                <Link 
                  className=" font-semibold font-sans cursor-pointer"
                  to="/gallery"
                >
                  <div className="text-black  hover:text-[#ffd300]">  Gallery</div>
                </Link>
              </li>
              <li className="">
                <Link
                  className=" font-semibold font-sans cursor-pointer"
                  to="/contactus"
                  
                >
                 <div className="text-black  hover:text-[#ffd300] "> Contact Us </div>
                </Link>
              </li>
              {/* <li className="">
                <Link
                  className=" font-semibold font-sans cursor-pointer"
                  to="/login"
                  
                >
                 <div className="inline-flex justify-center items-center py-1 px-3 text-base font-medium text-center text-black rounded-lg bg-white  ring-1 ring-black  hover:text-[#ffd300]"> Login / Sign Up</div>
                </Link>
              </li> */}
            </ul>
          </nav>
        </div>
      </header>
      {isMobileMenuOpen && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-50 z-40 "
          onClick={toggleMobileMenu}
        ></div>
      )}
      <div className={`overlay-menu ${isMobileMenuOpen ? "open" : "hidden"}`}>
        <div className="flex justify-between p-5 ">
        <img src={logo} alt="wdwd" className="h-10"/>
          <button
            onClick={toggleMobileMenu}
            className="text-black hover:text-[#FF5C00]  focus:outline-none"
          >
            <svg
              className="w-6 h-6 mx-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        {/* <div className=" "> */}
        <ul className="p-10">
          <li className="">
            <Link
              className="text-black  hover:text-[#FF5C00] text-xl font-bold font-sans cursor-pointer"
              activeClass="active"
              to="/"
       
              onClick={() => setMobileMenuOpen(false)}
            >
            <div className="text-black  hover:text-[#ffd300]">Home</div> 
            </Link>
          </li>
          <li className="">
            <Link
              className="text-black  hover:text-[#FF5C00] text-xl font-bold font-sans cursor-pointer"
              to="/"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="text-black  hover:text-[#ffd300]">About Us</div> 
            </Link>
          </li>
          <li className="">
            <Link
              className="text-black  hover:text-[#FF5C00] text-xl font-bold font-sans cursor-pointer"
              to="/projects"
              onClick={() => setMobileMenuOpen(false)}
            >
            <div className="text-black  hover:text-[#ffd300]">Projects</div> 
            </Link>
          </li>
          <li className="">
            <Link
              className="text-black  hover:text-[#FF5C00] text-xl font-bold font-sans cursor-pointer"
              to="/certifications"
              onClick={() => setMobileMenuOpen(false)}
            >
             <div className="text-black  hover:text-[#ffd300]">Certifications</div> 
            </Link>
          </li>
          <li className="">
            <Link
              className="text-black  hover:text-[#FF5C00] text-xl font-bold font-sans cursor-pointer"
              to="/gallery"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="text-black  hover:text-[#ffd300]">Gallery</div> 
            </Link>
          </li>
          <li className="">
            <Link
              className="text-black  hover:text-[#FF5C00] text-xl font-bold font-sans cursor-pointer"
              to="/contactus"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="text-black  hover:text-[#ffd300]">Contact Us</div> 
            </Link>
          </li>
        </ul>
      </div>

     
    </>
  );
}

export default Navbar;
