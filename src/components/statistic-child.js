import React from 'react';
import PropTypes from 'prop-types';
import Img from "gatsby-image"

const StatisticChild = ({icon, title, subtitle, color}) => {
  
  return (
    <div className={`bg-${color} p-5 lg:flex-1 md:w-1/2 flex text-white items-center justify-center`}>
      {icon &&
        (<div className="p-2 w-2/4 flex items-center justify-center">
          {icon.extension==='svg'?<img className="w-2/4" src={icon.url} alt={subtitle}/>:<Img className="w-2/4" fluid={icon.childImageSharp.fluid} alt={subtitle}/>}
        </div>)
      }
      <div className="w-2/4">
        <h2 className="text-5xl my-2 font-bold">{title}</h2>
        <h4 className="text-xl font-bold">{subtitle}</h4>
      </div>
    </div>
  );
};

StatisticChild.propTypes = {
  icon: PropTypes.object,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  color: PropTypes.string,
};

export default StatisticChild;