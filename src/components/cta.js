import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "gatsby";

const Cta = ({link, text, color, left}) => {
  const isExternal = link.startsWith('http');
  return (
    <div className="container mx-auto my-5">
      <div className={`flex ${left?'justify-start ':'justify-center '} items-center font-serif`}>
        {isExternal?<a target="_blank" rel="noopener noreferer" className={`text-2xl lg:text-3xl text-white flex-shrink py-3 px-4 lg:py-4 lg:px-5 font-thin bg-${color} uppercase inline-block max-w-xs lg:max-w-full lg:w-auto`} href={link}>
            <span dangerouslySetInnerHTML={{ __html: text }}></span>
          </a>
          :<Link className={`text-2xl lg:text-3xl text-white flex-shrink py-3 px-4 lg:py-4 lg:px-5 font-thin bg-${color} uppercase inline-block max-w-xs lg:max-w-full lg:w-auto`} to={link}>
          <span dangerouslySetInnerHTML={{ __html: text }}></span>
        </Link>}
      </div>
    </div>
  );
};

Cta.propTypes = {
  link: PropTypes.string,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.object,
  ]),
};

export default Cta;