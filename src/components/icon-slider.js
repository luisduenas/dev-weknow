import React from 'react';
import PropTypes from 'prop-types';
import Slider from "react-slick";
import Img from 'gatsby-image';
import '../css/slick-slider.css';
/** @jsx jsx */
import { jsx } from "theme-ui";

const IconSlider = ({icons}) => {
  var settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }
    ]
  };
  return (
    <div className="my-3 lg:my-6 mb-3 container mx-auto">
      <h2 className="uppercase leading-relaxed text-3xl text-darker text-center my-4 font-serif">Our Partners</h2>
      <div className="block my-5">
        <Slider {...settings}>
          {icons&&icons.map(({image, link})=>(
            <div key={link} className="text-center">
              <a className="inline-block mx-auto min-w-full" href={link} target="_blank" rel="noopener noreferrer">
                <Img fluid={image} alt="" className=""/>
                <span sx={{
                  textIndent: '-2000px'
                }} className="text-white overflow-hidden">{link}</span>
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

IconSlider.propTypes = {
  icons: PropTypes.Array
};

export default IconSlider;