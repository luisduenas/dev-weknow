import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'gatsby';
import _isString from 'lodash/isString';

const HighlightedCareers = ({title, content, careers}) => {
  return (
    <div className="container mx-auto p-3 py-5 lg:py-6 lg:px-4 font-serif">
      <div className="text-darker text-3xl lg:text-6xl mb-4 text-center mx-auto w-11/12 lg:w-8/12 leading-tight" dangerouslySetInnerHTML={{ __html: title }}></div>
      {_isString(content)&&<div className="text-darker text-xl lg:text-2xl font-thin text-center mb-4" dangerouslySetInnerHTML={{ __html: content }} />}
      {!_isString(content)&&<div className="text-darker text-2xl font-thin text-center mb-4">{content}</div>}
      <div className="flex flex-wrap px-3 lg:px-6 items-center justify-center">
      {careers&&careers.map((career,i)=>(
        <Link key={i} to={career.link} className="bg-gray-200 p-4 flex flex-col text-center text-darkest hover:bg-red-800 hover:text-white hover:shadow-lg hover:scale-2">
          <h3 className="my-5 text-2xl font-bold">{career.title}</h3>
          <p className="mt-auto">{career.subtitle}</p>
          <p className="mb-2">{career.location}</p>
        </Link>
      ))}
      </div>
    </div>
  );
};

HighlightedCareers.propTypes = {
  title: PropTypes.string,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  careers: PropTypes.array,
};

export default HighlightedCareers;