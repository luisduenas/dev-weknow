import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { graphql, useStaticQuery } from "gatsby";
import { ThemeProvider } from "theme-ui";
import Header from "./header";
import Sidebar from './sidebar';
import Footer from "./footer";
const theme = require("../../theme.js");

function Layout({ children, noHero }) {
  const [scrolledMenu, setScrolledMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [mobileSize] = useState(769);
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  useEffect(() => {
    if(typeof window !== 'undefined'){
      const handleResize = (event) => {
        const isMobile = window.innerWidth < mobileSize;
        setIsMobile(isMobile);
      }
      window.addEventListener('scroll', handleScroll, {passive: true});
      window.addEventListener('resize', handleResize, {passive: true});
      const isMobile = window.innerWidth < mobileSize;
      
      setIsMobile(isMobile);
    }
  }, [mobileSize]);
  
  const handleScroll = (event) => {
    var target = event.target || event.srcElement;
    setScrolledMenu(target.scrollingElement.scrollTop > 30 );
  }
  
  const handleShowSidebar = () => {
    setShowSidebar(!showSidebar);
  }
  return (
    <ThemeProvider theme={theme}>
      <div className="flex flex-col font-sans min-h-screen text-gray-900">
        <Header
          siteTitle={data.site.siteMetadata.title}
          scrolled={scrolledMenu}
          isMobile={isMobile}
          handleShowSidebar={handleShowSidebar}
          noHero={noHero}
        />
        <Sidebar showSidebar={showSidebar} handleShowSidebar={handleShowSidebar} />
        <main className={`main ${noHero?'pt-5 lg:pt-6 p-0':'p-0'} `}>{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  noHero: PropTypes.bool,
};

export default Layout;
