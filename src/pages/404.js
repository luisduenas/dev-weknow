import React, { useState, useEffect } from "react";

import SEO from "../components/seo";
import background from "../images/404.png";
import { Link } from 'gatsby';
/** @jsx jsx */
import { jsx } from "theme-ui";

const theme = require("../../theme.js");

const NotFoundPage = () => {
  const [mobileSize] = useState(720);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = (event) => {
        const isMobile = window.innerWidth < mobileSize;
        setIsMobile(isMobile);
      }
      const isMobile = window.innerWidth < mobileSize;
      window.addEventListener('resize', handleResize, { passive: true });

      setIsMobile(isMobile);

    }
  }, [mobileSize]);

  return (
    <>
      <SEO title="404: Not found"
        url={`${process.env.PROJECT_URL}/404`}
      />

      <div className="flex mb-4">
        <div className="w-1/3"></div>
        <div className="flex justify-center text-white w-2/3 mt-4">
          <img src={background} className="absolute"
            sx={{
              maxWidth: isMobile ? '12rem' : "34rem",
            }}/>
          <div className="relative">
            <div className="flex justify-center mt-4">
              <Link to="/" style={{ display: 'block' }} className="w-6 lg:w-6 pl-4 lg:pr-4">
                <svg
                  title="404"
                  alt="404"
                  className="w-full"
                  fill={theme.colors.white}
                  viewBox="229.31500244140625 55.547000885009766 202.08700561523438 114.16500091552734"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M 229.315 99.334 L 238.567 99.334 L 257.492 155.477 L 277.047 99.124 L 286.51 99.124 L 305.855 153.585 L 325.2 99.124 L 334.242 99.334 L 310.902 169.306 L 299.757 169.355 L 282.515 115.105 L 262.749 169.293 L 252.235 169.355 L 229.315 99.334 Z"></path>
                  <path d="M 343.509 167.748"></path>
                  <path d="M 342.554 168.226"></path>
                  <path d="M 342.244 169.117 L 366.317 169.118 L 366.02 138.507 L 374.935 127.808 L 400.494 169.712 L 431.55 169.712 L 391.281 111.462 L 423.08 79.366 L 391.875 79.069 L 366.317 106.113 L 365.722 55.59 C 355.974 54.902 343.773 62.524 343.73 72.53 L 342.244 169.117 Z"></path>
                  <path d="M 345.513 67.775"></path>
                </svg>
              </Link>
            </div>
            <h1 className="flex justify-center mb-0 mt-3" 
            sx={{
              fontSize: '15vw',
              fontWeight: 'lighter',
              fontFamily: '"poppins",sans-serif'
            }}>
              404
            </h1>
            <p className="flex text-warning justify-center md:text-3xl sm:text-xl font-serif font-bold md:-mt-5 mt-4" style={{
            }}>We know you're lost.</p>

            <ul className={`md:flex text-center justify-center uppercase text-xs font-thin ${isMobile ? 'text-info' : 'text-white'}`}>
              <li className="px-2">
                <Link to="/services">
                  Services
                </Link>
              </li>
              <li className="px-2">
                <Link to="/about-us">
                  About us
                </Link>
              </li>
              <li className="px-2">
                <Link to="/why-weknow">
                  Why WeKnow
                </Link>
              </li>
              <li className="px-2">
                <Link to="/blog">
                  Blog
                </Link>
              </li>
              <li className="px-2">
                <Link to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-1/3"></div>
      </div>
    </>
  );
}

export default NotFoundPage;
