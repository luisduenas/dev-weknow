import React from 'react';
import PropTypes from 'prop-types';
import _isArray from 'lodash/isArray';
import {Link} from 'gatsby';
import _toLower from 'lodash/toLower';

const Tags = ({tags}) => {
  return tags&&_isArray(tags)&&(
    <div className="container mx-auto my-2 px-4 flex flex-wrap font-serif lg:px-6">
    <span className="text-primary text-2xl mr-3">Tags: </span>
      {tags.map((tag, i)=>(
        <React.Fragment key={i}>
          <span className="mr-2"><Link className="text-info text-2xl" to={_toLower(tag.path.alias)} >{tag.name}</Link>{(i+1<tags.length)&&','}</span>
        </React.Fragment>
      ))}
    </div>
  );
};

Tags.propTypes = {
  tags: PropTypes.array,
};

export default Tags;