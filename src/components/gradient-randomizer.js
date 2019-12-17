import React from 'react';
/** @jsx jsx */
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types';
import { Link } from "gatsby";

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

const ImageHero = ({messages}) => {
  const random = getRandomIntInclusive(0, messages.length-1);
  const showMessage = messages[random];
  return (
    <div className=" h-title-hero lg:h-hero flex flex-wrap flex-col items-center justify-center w-full font-serif " sx={{
      // height: 'hero',
      background: "linear-gradient(-30deg,#644B78 0%,#AF1F45 100%)",
    }}>
      <h1 className="text-white text-2xl mx-3 lg:text-6xl font-bold leading-snug text-center mt-auto">{showMessage.content}</h1>
      <Link className="text-warning h-3 mb-auto mt-4 underline leading-loose" to={showMessage.link}>{showMessage.linkText}</Link>
    </div>
  );
};

ImageHero.propTypes = {
  messages: PropTypes.array,
};

export default ImageHero;