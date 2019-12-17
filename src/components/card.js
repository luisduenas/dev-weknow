import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const Card = ({ title, subtitle, content, ctaLink, ctaLinkText, color }) => {
  return (
    <div className={`block p-4 md:p-4 ${ctaLink?'hover:shadow-xl':''} flex-1 font-serif`}>
      <h2 className={`text-4xl mb-4 font-light leading-snug text-${color}`}>{title}
        <span className={`text-3xl font-bold leading-snug block text-${color}`}>{subtitle}</span>
      </h2>
      <div className="text-2xl text-darker" dangerouslySetInnerHTML={{ __html: content }}></div>
      {ctaLink&&<Link to={ctaLink} className="text-xl underline mt-3 block text-primary" dangerouslySetInnerHTML={{ __html: ctaLinkText }}></Link>}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  content: PropTypes.string,
  ctaLink: PropTypes.string,
  ctaLinkText: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};

Card.defaultProps = {
  color: 'secondary'
}

export default Card;
