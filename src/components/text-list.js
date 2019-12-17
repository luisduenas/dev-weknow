import React from 'react';
import PropTypes from 'prop-types';

const TextList = ({title, items}) => {
  return items&&(
    <div className="container mx-auto px-4 font-serif">
      {title&&<h3 className="text-primary text-4xl text-center font-normal my-3">{title}</h3>}
      {items && items.map(({title, content})=>(
        <div key={title} className="py-4 md:flex pb-4 justify-center items-center">
          <h3
            className="text-3xl md:w-4/12 md:text-center text-secondary md:px-4"
            dangerouslySetInnerHTML={{ __html: title }}
          >
          </h3>
          <div
            className="md:w-8/12 text-xl font-thin leading-relaxed md:px-3"
            dangerouslySetInnerHTML={{ __html: content }}
          >
          </div>
        </div>
      ))}
    </div>
  );
};

TextList.propTypes = {
  
};

export default TextList;