import React from 'react';
import PropTypes from 'prop-types';
import EventChild from './events-child';
import StatChild from './statistic-child';
const Blocks = ({children}) => {
  return (
    <div className="md:flex flex-wrap my-5">
      {children}
    </div>
  );
};

Blocks.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.instanceOf(StatChild),
    PropTypes.instanceOf(EventChild)
  ]),
};

export default Blocks;