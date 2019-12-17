import React from 'react';
import PropTypes from 'prop-types';

const Headline = ({children}) => {
  return (
    <div className=" py-5 pb-4 bg-white font-serif">
      <div className="container px-4 lg:px-6 mx-auto">
        <div className="w-full lg:w-2/3 mx-auto text-3xl font-thin text-darker text-left">
        {children}
        </div>
      </div>
    </div>
  );
};

Headline.propTypes = {
  children: PropTypes.element,
};

export default Headline;