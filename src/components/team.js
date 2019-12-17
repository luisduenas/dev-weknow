import React from 'react';
import PropTypes from 'prop-types';
import TeamItem from './team-item';

const Team = ({team}) => {
  return (
    <div className="md:flex flex-wrap container mx-auto my-5">
      {team && team.map((person,i)=>(
        <TeamItem key={i} person={person} />
      ))}
    </div>
  );
};

Team.propTypes = {
  team: PropTypes.array,
};

export default Team;