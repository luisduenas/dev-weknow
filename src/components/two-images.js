import React from 'react';
import PropTypes from 'prop-types';
/** @jsx jsx */
import { jsx } from "theme-ui";
import Img from 'gatsby-image';

const TwoImages = ({firstImage, secondImage, firstImageWidth, secondImageWidth}) => {
  return (
    <div className="lg:flex flex-wrap container mx-auto pb-5 pt-3">
      <div className={`lg:${firstImageWidth} lg:w-8/12 p-4 lg:pr-1 w-full `}>
        {firstImage&&<Img fluid={firstImage} alt="" sx={{
          objectFit: 'cover',
          height: '300px',
        }}/>}
      </div>
      <div className={`lg:${secondImageWidth} lg:w-4/12 hidden md:block md:pr-0 w-full  p-4`}>
        {secondImage&&<Img fluid={secondImage} alt="" sx={{
          objectFit: 'cover',
          height: '300px',
        }}/>}
      </div>
    </div>
  );
};

TwoImages.propTypes = {
  firstImage: PropTypes.object,
  secondImage: PropTypes.object,
  firstImageWidth: PropTypes.string,
  secondImageWidth: PropTypes.string,
};

TwoImages.defaultProps = {
  firstImageWidth: 'w-8/12',
  secondImageWidth: 'w-4/12',
};

export default TwoImages;