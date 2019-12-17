import React from 'react';
import PropTypes from 'prop-types';
import DownloadForm from './download-form';
const TextImageForm = ({text, image}) => {
  return (
    <div className="container mx-auto p-3 lg:p-4 flex felx-wrap">
      <div className="w-full lg:w-1/2">
        <div className="text-xl text-darker font-bold pb-4" dangerouslySetInnerHTML={{__html: text}}></div>
        <img src={image} alt=""/>
      </div>
      <div className="w-full lg:w-1/2 p-3 bg-white">
        <DownloadForm />
      </div>
    </div>
  );
};

TextImageForm.propTypes = {
  
};

TextImageForm.defaultProps = {
  text: "Choosing  weKnow is working with an extended family of Drupal and Open Source experts, we are a development company in latinamerica. Tell us about your project and we will help turn your vision into the digital experience your customers deserve.",
  image: "https://weknowinc.com/sites/default/files/2018-11/contact-hero.png"
};

export default TextImageForm;