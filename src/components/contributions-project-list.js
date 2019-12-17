import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "gatsby";

const ModuleList = ({items, columns}) => {
  
  return (
    <div className="md:flex flex-wrap justify-start items-start text-darker text-center md:w-8/12 lg:w-6/12 mx-auto">
      {items && items.map(({node:{data}},i)=>(
        <a key={i} href={data.link} className={`md:w-1/${columns} block w-full mb-3 md:text-center text-center text-xl`}>{data.name}</a>
      ))}
    </div>
  );
};

ModuleList.propTypes = {
  items: PropTypes.array,
  columns: PropTypes.string,
};

export default ModuleList;