import React from 'react';
/** @jsx jsx */
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types';
import Slider from "react-slick";
import Img from 'gatsby-image';
import { Link } from "gatsby";
import '../css/slick-slider.css';

const ImageHeroSlider = ({slides}) => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true
  };
  return (
    <Slider {...settings}>
      {slides&&slides.map(({image, ctaLinkText, ctaLink, ctaText}, i)=>(
        <React.Fragment key={i}>
          <div className="lg:h-hero h-auto flex flex-wrap items-center justify-center w-full mb-5">
            <div className="w-full z-0 lg:h-hero">
              <Img fluid={image} alt=""/>
            </div>
            <div className="container flex flex-wrap items-start font-serif mx-auto absolute mt-6">
              <div className="lg:w-1/3 w-11/12 md:w-6/12 mb-4 mx-auto lg:ml-4 bg-white p-3 lg:mt-7 pb-4">
                <p className="text-darker text-lg mb-3 text-right uppercase font-slim leading-normal pl-5">{ctaText}</p>
                <Link className="text-warning text-sm uppercase text-right block" to={ctaLink}>
                  <span
                    dangerouslySetInnerHTML={{ __html: ctaLinkText }}
                  />
                </Link>
              </div>
            </div>
          </div>
        </React.Fragment>
      ))}
    </Slider>
  );
};

ImageHeroSlider.propTypes = {
  image: PropTypes.string,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string,
  ctaLinkText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
};

export default ImageHeroSlider;