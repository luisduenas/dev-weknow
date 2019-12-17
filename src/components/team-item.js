import React from 'react';
import PropTypes from 'prop-types';
/** @jsx jsx */
import { jsx } from 'theme-ui'
import {Link} from 'gatsby';
import Img from 'gatsby-image';

const ItemContent = ({person}) => (
  <div>
    <div className="">
      <Img sx={{
        filter: 'grayscale(100%)',
        transition: 'all 1s ease',
        ':hover': {
          filter: 'grayscale(0%)',
        }
      }} fluid={person.image} alt={person.name} />
    </div>
    <div className="block lg:-mt-5 w-full relative lg:absolute lg:bottom-0 left-0 lg:px-3 md:px-0 lg:mx-3 pt-3 pb-3 overflow-hidden"
      sx={{
        background: 'linear-gradient(0deg, white 10%, transparent 100%)'
      }}
    >
      <span className="block mx-0 text-xl lg:text-3xl font-bold leading-tight">{person.name}</span>
      <span className="block mx-0 text-lg lg:text-3xl font-thin leading-tight">{person.position}</span>
    </div>
  </div>
);

const TeamItem = ({person}) => {
  return (
    <div className="md:w-1/3 px-3 mb-4 relative font-serif">
      {person.page && <Link to={person.page}>
        <ItemContent person={person} />
      </Link>}
      {!person.page && <ItemContent person={person} />}
		</div>
  );
};

TeamItem.propTypes = {
  person: PropTypes.object,
};

export default TeamItem;