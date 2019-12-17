import React from "react";
import PropTypes from "prop-types";
/** @jsx jsx */
import { jsx } from "theme-ui";
import {Link} from 'gatsby';

const Sidebar = ({showSidebar, handleShowSidebar}) => {
  return (
    <div className="fixed w-full z-30"
      sx={{
        background: 'linear-gradient(to right bottom,#AF1F45 60%,#644B78 100%)',
        transition: 'right 0.5s',
        right: showSidebar?'0':'-100%',
        height: '100vh'
      }}
    >
      <div className="relative flex justify-end p-3 w-full pb-0">
      <button onClick={handleShowSidebar} className="h-3">
        <svg
        className="w-4"
          viewBox="136.09100341796875 58.95399856567383 134.19000244140625 134.19000244140625"
          xmlns="http://www.w3.org/2000/svg"
          fill="#fff"
        >
          <path d="M 136.091 61.084 L 268.151 193.144 L 270.281 190.588 L 138.647 58.954 L 136.091 61.084 Z"></path>
          <path d="M 137.967 59.939"></path>
          <path
            d="M 136.091 191.014 L 268.151 58.954 L 270.281 61.51 L 138.647 193.144 L 136.091 191.014 Z"
            transform="matrix(-1, 0, 0, -1, 406.372006, 252.097996)"
          ></path>
          <path d="M 268.965 191.856"></path>
        </svg>
        <span className="text-secondary">Close</span>
        </button>
      </div>
      <div className="text-white text-4xl my-0 font-thin font-serif">
        <div className="mx-4">
          <ul id="" className="list-none pl-0">
            <li className="">
              <Link className="" to="/">
                Home
              </Link>
            </li>
            <li className="">
              <Link className="" to="/services">
                Services
              </Link>
            </li>
            <li className="">
              <Link className="" to="/about-us">
                About us
              </Link>
            </li>
            <li className="">
              <Link className="" to="/why-weknow">
                Why WeKnow
              </Link>
            </li>
            <li className="">
              <Link className="" to="/we-give">
                We Give
              </Link>
            </li>
            <li className="">
              <Link className="" to="/blog">
                Blog
              </Link>
            </li>
            <li className="">
              <Link className="" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <div className="cta ">
            <Link to="/contact" className="bg-white px-2 text-2xl mt-2 text-center py-2 inline-block text-primary">
              <small>
                Ready to partner <strong>with us?</strong>
              </small>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  handleShowSidebar: PropTypes.func,
};

export default Sidebar;
