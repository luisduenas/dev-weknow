import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "gatsby";

const MarketingBanner = ({info, content, link, linkText, gradient}) => {

  return (
    <div className="p-5 font-serif mb-5" style={{ background: 'linear-gradient(-45deg,#644B78  0%,#644B78 100%)' }}>
    <div className="container mx-auto text-white mb-4">
      <div className="text-center">
        <div className="text-4xl" dangerouslySetInnerHTML={{ __html: info }}></div>
        <div className="text-xl font-thin mb-4" dangerouslySetInnerHTML={{ __html: content }}></div>
        {link &&
          <Link to={link} className="uppercase py-2 px-4 font-bold inline-block" style={{ color: "#644B78", backgroundColor: "white", borderRadius: "3px" }}>
            {linkText}
          </Link>
        }
      </div>
    </div>
  </div>
  );
};

MarketingBanner.propTypes = {
  image: PropTypes.string,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string,
  ctaLinkText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
};

export default MarketingBanner;