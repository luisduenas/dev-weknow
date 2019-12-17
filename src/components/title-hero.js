import React from "react";
import PropTypes from "prop-types";
/** @jsx jsx */
import { jsx } from "theme-ui";
import Img from 'gatsby-image';

const TitleHero = ({ title, image, postMeta, gradient }) => {
  return (
    <div
      className="relative z-0 h-auto w-full overflow-auto"
      sx={{
        "::before": {
          content: "''",
          display: "block",
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          zIndex: '10',
          right: 0,
          background: `linear-gradient(180deg,#644B78 0%,${gradient !== undefined ? gradient : "#288DC1"} 100%)`,
          opacity: "0.7",
          transition: "background 0.3s linear"
        }
      }}
    > 
      <Img className="absolute w-full h-title-hero z-0" fluid={image} />
      <div className="w-full h-title-hero absolute font-serif z-10 top-0">
        <div className="container mx-auto flex flex-wrap h-title-hero items-center justify-center">
          <h1
            className={`text-4xl leading-none lg:text-6xl text-white z-10 font-thin lg:leading-tight font-serif text-center my-auto ${postMeta?'mb-0':''}`}
            dangerouslySetInnerHTML={{ __html: title }}
            >
          </h1>
          {postMeta && <div className="w-full text-center flex justify-center items-center z-10 mt-4 mb-auto">{postMeta}</div> }
        </div>
      </div>
    </div>
  );
};

TitleHero.propTypes = {
  title: PropTypes.string,
  image: PropTypes.object,
  postMeta: PropTypes.element,
  gradient: PropTypes.string,
};

export default TitleHero;
