import { Link } from "gatsby";
import PropTypes from "prop-types";
import { useState } from "react";
/** @jsx jsx */
import { jsx } from "theme-ui";
const theme = require("../../theme.js");
function Header({ siteTitle, scrolled, isMobile, handleShowSidebar, noHero }) {
  // const [isExpanded, toggleExpansion] = useState(false);

  return (
    <nav
      className={`bg-${
        scrolled || isMobile||noHero ? "white" : "transparent"
      } fixed w-full z-20 ie-nav-menu`}
      sx={{
        transition: 'background 200ms ease-out'
      }}
    >
      <div className="flex flex-no-wrap items-center justify-between mx-auto p-2 md:py-4 container">
        <Link to="/" className="flex items-center no-underline text-white w-6 lg:w-6 pl-4 lg:pr-4">
          <svg
            title={siteTitle}
            alt={siteTitle}
            className="w-full"
            fill={scrolled || isMobile||noHero ? theme.colors.primary : theme.colors.white}
            viewBox="229.31500244140625 55.547000885009766 202.08700561523438 114.16500091552734"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M 229.315 99.334 L 238.567 99.334 L 257.492 155.477 L 277.047 99.124 L 286.51 99.124 L 305.855 153.585 L 325.2 99.124 L 334.242 99.334 L 310.902 169.306 L 299.757 169.355 L 282.515 115.105 L 262.749 169.293 L 252.235 169.355 L 229.315 99.334 Z"></path>
            <path d="M 343.509 167.748"></path>
            <path d="M 342.554 168.226"></path>
            <path d="M 342.244 169.117 L 366.317 169.118 L 366.02 138.507 L 374.935 127.808 L 400.494 169.712 L 431.55 169.712 L 391.281 111.462 L 423.08 79.366 L 391.875 79.069 L 366.317 106.113 L 365.722 55.59 C 355.974 54.902 343.773 62.524 343.73 72.53 L 342.244 169.117 Z"></path>
            <path d="M 345.513 67.775"></path>
          </svg>
        </Link>


        <div className={`hidden lg:flex md:items-center flex-shrink text-sm ${
          scrolled || isMobile||noHero ? "text-primary" : "text-white"
        }`}>
          <Link
            to="/"
            className="md:inline-block px-0 mx-3 leading-loose border-b-2 border-transparent"
            sx={{
              ":hover": {
                borderColor: "#fff"
              }
            }}
          >
            Home
          </Link>
          <Link
            to="/services"
            className="md:inline-block px-0 mx-3 leading-loose border-b-2 border-transparent"
            sx={{
              ":hover": {
                borderColor: "#fff"
              }
            }}
          >
            Services
          </Link>
          <Link
            to="/about-us"
            className="md:inline-block px-0 mx-3 leading-loose border-b-2 border-transparent"
            sx={{
              ":hover": {
                borderColor: "#fff"
              }
            }}
          >
            About us
          </Link>
          <Link
            to="/why-weknow"
            className="md:inline-block px-0 mx-3 leading-loose border-b-2 border-transparent"
            sx={{
              ":hover": {
                borderColor: "#fff"
              }
            }}
          >
            Why WeKnow
          </Link>
          <Link
            to="/we-give"
            className="md:inline-block px-0 mx-3 leading-loose border-b-2 border-transparent"
            sx={{
              ":hover": {
                borderColor: "#fff"
              }
            }}
          >
            We Give
          </Link>
          <Link
            to="/blog"
            className="md:inline-block px-0 mx-3 leading-loose border-b-2 border-transparent"
            sx={{
              ":hover": {
                borderColor: "#fff"
              }
            }}
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="md:inline-block px-0 mx-3 leading-loose border-b-2 border-transparent"
            sx={{
              ":hover": {
                borderColor: "#fff"
              }
            }}
          >
            Contact
          </Link>
        </div>
      
        <button
          className="block lg:hidden border border-transparent flex items-center p-2 text-white"
          onClick={() => handleShowSidebar()}
        >
          <svg
            className="w-5 px-2"
            viewBox="261.53900146484375 145.27000427246094 97.40499877929688 75.30599975585938"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsbx="https://boxy-svg.com"
            fill={scrolled || isMobile ? theme.colors.primary : theme.colors.white}
          >
            <title>Menu</title>
            <path d="M 271.21 166.04 C 258.537 165.855 257.814 145.297 272.052 145.27 L 349.238 145.27 C 362.366 145.219 361.991 166.536 349.238 166.601 L 271.21 166.04 Z"></path>
            <path
              d="M 271.327 193.058 C 258.236 193.153 258.175 172.32 271.962 172.288 L 333.333 172.288 C 346.511 172.231 346.796 193.547 333.368 193.619 L 271.327 193.058 Z"
              transform="matrix(0.999998, 0.00207, -0.00207, 0.999998, 0.376693, -0.688812)"
              bxorigin="0.873 0.438"
            ></path>
            <path
              d="M 270.629 219.998 C 258.692 220.37 258.234 199.264 271.105 199.228 L 317.107 199.228 C 329.316 199.168 328.571 220.486 317.133 220.559 L 270.629 219.998 Z"
              transform="matrix(0.999998, 0.00207, -0.00207, 0.999998, 0.432427, -0.657421)"
              bxorigin="0.873 0.438"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  scrolled: PropTypes.bool,
  isMobile: PropTypes.bool,
  showSidebar: PropTypes.func,
  noHero: PropTypes.bool
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
