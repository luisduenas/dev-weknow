import React from 'react';
import PropTypes from 'prop-types';
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from "gatsby";
import { FaFacebookF, FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";



const Footer = props => {
  return (
    <footer className="bg-darkest px-4 lg:px-0">
      <nav className="md:flex flex-wrap justify-between container mx-auto px-3 md:px-0 md:py-5 py-3 text-sm font-serif">
        <div className="text-white lg:mx-1 md:w-1/3 lg:w-1/4 mb-3 md:mb-0 md:px-2">
          <img className="mx-auto" src="/weknow-logo-white.png" alt=""/>
          <h2 className="text-2xl font-bold text-center my-4"></h2>
          <div className="flex justify-between flex-shrink mb-4 px-4 md:px-0">
            <a href="https://www.facebook.com/weknowinc/"><FaFacebookF className="text-4xl"/><span sx={{
                  textIndent: '-2000px'
                }} className="text-darkest block overflow-hidden w-0">facebook</span></a>
            <a href="https://twitter.com/weknowinc"><FaTwitter className="text-4xl"/><span sx={{
                  textIndent: '-2000px'
                }} className="text-darkest block overflow-hidden w-0">twitter</span></a>
            <a href="https://www.instagram.com/weknowinc/"><FaInstagram className="text-4xl" /><span sx={{
                  textIndent: '-2000px'
                }} className="text-darkest block overflow-hidden w-0">instagram</span></a>
            <a href="https://linkedin.com/company/weknow-inc"><FaLinkedin className="text-4xl"/><span sx={{
                  textIndent: '-2000px'
                }} className="text-darkest block overflow-hidden w-0">linkedin</span></a>
            <a href="https://github.com/weknowinc"><FaGithub className="text-4xl"/><span sx={{
                  textIndent: '-2000px'
                }} className="text-darkest block overflow-hidden w-0">github</span></a>
          </div>
        </div>
        <div className="text-dark lg:pl-4 md:w-1/3 md:px-4 lg:w-auto">
          <h4 className="md:text-xl leading-normal text-warning uppercase">Useful links</h4>
          <ul className="leading-loose  pl-0">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-us">About us</Link></li>
            <li><Link to="/why-weknow">Approach</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/case-study/how-weknow-streamlined-digital-operations-fortune-60-company">Case Studies</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/open-source-development/">Open Source Development</Link></li>
            <li><Link to="/drupal-outsourcing">Drupal Outsourcing</Link></li>
          </ul>
        </div>
        <div className="text-dark lg:pl-4 mb-3 md:mb-0 md:w-1/3 lg:w-auto">
          <h4 className="md:text-xl leading-normal text-darkest hidden md:block">Useful links</h4>
          <ul className="leading-loose pl-0">
            <li><Link to="/drupal-nearshore-outsourcing-services">Drupal Nearshore Outsourcing Services</Link></li>
            <li><Link to="/gatsby-development-services/">Gatsby Development Services</Link></li>
            <li><Link to="/staff-augmentation-services/">IT Staff Augmentation Services</Link></li>
            <li><Link to="/nearshore-development-services/">Nearshore Development Services</Link></li>
            <li><Link to="/nearshore-software-outsourcing/">Nearshore Software Outsourcing</Link></li>
            <li><Link to="/software-development-outsourcing-services-in-mexico/">Software Development Outsourcing</Link></li>
            <li><Link to="/software-development-services/">Software Development Services</Link></li>
            <li><Link to="/software-outsourcing-services/">Software Outsourcing Services</Link></li>
          </ul>
        </div>
        <div className="text-dark lg:pl-4 mb-3 md:mb-0 w-full lg:w-auto md:px-3 px-0">
          <h4 className="md:text-xl leading-normal text-warning uppercase">Hire Us!</h4>
          <ul className="leading-loose pl-0">
            <li><Link to="/hire-content-developers">Hire our Drupal Developers</Link></li>
            {/* <li><Link to="/hire-devops-developers">Scale your DevOps team</Link></li> */}
            <li><Link to="/hire-artificial-intelligence-developers">See our Ai proficiency</Link></li>
            <li><Link to="/hire-javascript-developers">Use our VueJS / ReactJS Devs in your project</Link></li>
          </ul>
          <div className="flex items-left lg:items-center mt-4 w-full">
            <Link to="/contact" className="text-secondary text-lg bg-white px-3 py-2 block mx-auto " >Contact <span className="font-bold">Us</span></Link>
          </div>
        </div>
      </nav>
    </footer>
  );
};

Footer.propTypes = {
  
};

export default Footer;