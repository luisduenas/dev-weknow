import React from 'react';
import PropTypes from 'prop-types';
/** @jsx jsx */
import { jsx } from "theme-ui";
import Img from 'gatsby-image';

const Image = ({image}) => {
  return (
    <div className="lg:flex flex-wrap container mx-auto pb-4 pt-4 items-center justify-center w-full">
      <div className={`lg:6/12 lg:w-6/12 p-4 lg:pr-1 w-full`}>
        {image&&<Img fluid={image} alt=""/>}
      </div>
    </div>
  );
};

export default Image;
