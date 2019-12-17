import React from 'react';
import PropTypes from 'prop-types';
/** @jsx jsx */
import { jsx } from "theme-ui";
import ContactForm from './contact-form';
const BgImageContact = props => {
  return (
    <div className="relative z-0 h-auto flex flex-wrap items-center justify-center w-full overflow-hidden" 
      sx={{
      "::before": {
        content: "''",
        display: "block",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        zIndex: '10',
        right: 0,
        background: `linear-gradient(-45deg,#288DC1 0%,#AF1F45 100%)`,
        opacity: "0.7",
        transition: "background 0.3s linear"
      }
    }}>
      <img className="absolute w-full z-0" src="https://weknowinc.com/sites/default/files/2018-11/badcamp-post-hero.png" alt=""/>
      <div className="container flex flex-wrap items-center justify-center font-serif z-10">
        <div className="w-2/4 mx-auto bg-white p-4" >
          <ContactForm title="Don't be a stranger" />
        </div>
      </div>
    </div>
  );
};

BgImageContact.propTypes = {
  
};

export default BgImageContact;