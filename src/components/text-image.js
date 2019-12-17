import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const TextImage = ({image, content, children, centered}) => {
  return (
    <div className={`md:flex container mx-auto pt-5 pb-4 px-4 lg:px-0 font-serif items-center justify-center ${centered?'flex-col':''}`}>
      {centered && <div className="md:w-12/12 flex items-center justify-center mb-5"><Img fluid={image} alt=""/></div>}
      <div className={`${centered?'md:w-10/12':'md:w-8/12'} text-3xl text-darker`}>{content||children}</div>
      {!centered && <div className="md:w-4/12 flex items-center justify-center"><Img fluid={image} alt=""/></div>}
    </div>
  );
};

TextImage.propTypes = {
  centered: PropTypes.bool,
  image: PropTypes.string,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
};

export default TextImage;