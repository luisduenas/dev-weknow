import React from "react";
import PropTypes from "prop-types";
// import Disqus from "disqus-react";


import { Disqus, CommentCount } from 'gatsby-plugin-disqus'

const DisqusComment = ({ url, identifier, title }) => {
  const disqusShortname = process.env.DISQUS_ID;
  console.log(disqusShortname);
  const disqusConfig = {
    url: `https://weknowinc.com${url}`,
    identifier: `https://weknowinc.com${identifier}`,
    title
  };
  return (
    <div className="container mx-auto p-4">
      <CommentCount config={disqusConfig} placeholder={'...'} />
      <Disqus config={disqusConfig} />
    </div>
  );
};

DisqusComment.propTypes = {};

export default DisqusComment;
