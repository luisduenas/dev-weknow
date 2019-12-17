import React from "react";
import PropTypes from "prop-types";
import Img from 'gatsby-image';
import { Link } from "gatsby";

const ArticleItem = ({ post }) => {
  const { path, title, field_resume, body, created, relationships } = post;
  const postDate = new Date(created);
  const longMonth = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(postDate);
  return (
    <div className="mb-4"
    >
      <Link to={path.alias} className="w-full mb-3 block">
        <Img fluid={relationships.field_image.relationships.field_media_image.localFile.childImageSharp.fluid} className="w-full h-10 md:h-10" alt="Gatsby YAML" />
      </Link>

      <Link to={path.alias} className="text-2xl lg:text-3xl leading-tight font-bold mb-2 block font-blog">{title}</Link>
      <p className="text-darker mb-2 italic">
        By {relationships.uid.field_full_name||'WeKnow'} | {longMonth} {postDate.getDay()}, {postDate.getFullYear()}
      </p>

      {
        field_resume && 
        <p className="text-xl lg:text-2xl font-thin leading-tight mb-2 text-darker font-serif">
        {field_resume}
        </p>
      }

      {post.fields.markdownBody.childMarkdownRemark.excerpt && <p className="text-xl leading-normal text-darker mb-3">{post.fields.markdownBody.childMarkdownRemark.excerpt}</p>}

      <Link to={path.alias} className="text-primary text-xl">
        - READ <strong>MORE</strong>
      </Link>
    </div>
  );
};

ArticleItem.propTypes = {
  post: PropTypes.object
};

export default ArticleItem;