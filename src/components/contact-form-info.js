import React from 'react';
import PropTypes from 'prop-types';
import ContactForm from './contact-form';

const ContactFormInfo = props => {
  return (
    <div className="container mx-auto lg:flex font-serif px-4 pb-4 lg:px-6 ">
      <div className="w-full lg:w-1/2 ">
        <ContactForm />
      </div>
      <div className="w-full hidden md:block md:pr-0 px-4 lg:w-1/2">
        <h2 className="text-secondary text-4xl mb-4 text-darker">Contact us</h2>
        <div className="bg-gray-100 p-4 lg:px-5 lg:py-4 flex justify-center flex-col w-full xl:pl-6">
            <h3 className="text-4xl font-bold mb-0">USA</h3>
            <p className="mb-4 text-2xl">
                <a href="tel:+1 703 831 3307">+1 703 831 3307</a>
            </p>
            <h3 className="text-4xl font-bold mb-0">COSTA RICA</h3>
            <p className="mb-4 text-2xl">
                <a href="tel:+506 8810 5279">+506 8810 5279</a>
            </p>
            <h3 className="text-4xl font-bold mb-0">AUSTRALIA</h3>
            <p className="mb-4 text-2xl">
                <a href="tel:+61 481 365 835">+61 481 365 835</a>
            </p>
        </div>
      </div>
    </div>
  );
};

ContactFormInfo.propTypes = {

};

export default ContactFormInfo;
