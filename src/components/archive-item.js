import React from "react";
import PropTypes from "prop-types";
/** @jsx jsx */
import { jsx } from 'theme-ui'
import theme from '../../theme';
import Img from 'gatsby-image';
import { Link } from "gatsby";

const ArchiveItem = ({ post }) => {
  const { path, title, field_resume, body, created, relationships } = post;
  return (
    <div className="mb-4"
    >
      <Link to={path.alias} className="w-full mb-3 block">
        <Img fluid={relationships.field_image.relationships.field_media_image.localFile.childImageSharp.fluid} className="w-full h-10 md:h-14" alt="Gatsby YAML" />
      </Link>

      <Link to={path.alias} className="text-2xl lg:text-3xl leading-tight font-bold mb-2 block font-blog">{title}</Link>
      {field_resume && <p className="text-xl lg:text-2xl font-thin leading-tight mb-2 text-darker font-blog">{field_resume}</p>}

      <p className=" text-darker mb-2 italic">
        By {relationships.uid.field_full_name||'WeKnow'} | {created}
      </p>

      {post.fields.markdownBody.childMarkdownRemark.excerpt && <p className="text-xl leading-normal text-darker mb-3">{post.fields.markdownBody.childMarkdownRemark.excerpt}</p>}

      <Link to={path.alias} className="text-primary text-xl">
        - READ <strong>MORE</strong>
      </Link>
    </div>
  );
};

ArchiveItem.propTypes = {
  post: PropTypes.object
};

export default ArchiveItem;
