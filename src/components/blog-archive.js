import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import InfiniteScroll from "react-infinite-scroller";
import ArchiveItem from "./archive-item";
const BlogArchive = props => {
  const { posts } = useStaticQuery(
    graphql`
      {
        posts: allNodeBlogPost(sort: { fields: created, order: DESC }) {
          edges {
            node {
              title
              path {
                alias
              }
              created(formatString: "MMM D, YYYY")
              fields {
                markdownBody {
                  childMarkdownRemark {
                    html
                    rawMarkdownBody
                    excerpt
                  }
                }
              }
              field_resume
              relationships {
                uid {
                  field_full_name
                }
                field_image {
                  relationships {
                    field_media_image {
                      localFile {
                        childImageSharp {
                          fluid {
                            ...GatsbyImageSharpFluid
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  );
  
  const [filteredItems, setFilteredItems] = useState(posts.edges.slice(0,6));
  function loadMoreItems(page) {
    const moreItems = (page*6>posts.edges.length)?posts.edges:posts.edges.slice(0,page*6);
    if(moreItems.length<=posts.edges.length)
      setFilteredItems(moreItems);
  }

  return (
    <div >
      <InfiniteScroll
        className="container mx-auto md:flex flex-wrap pt-4 md:pt-6"
        pageStart={0}
        loadMore={loadMoreItems}
        hasMore={posts.edges.length > filteredItems.length}
        loader={
          <div className="bg-grey-200 container mx-auto p-4 text-center text-darker font-serif" key={0}>
            Loading ...
          </div>
        }
      >
        {filteredItems &&
          filteredItems.map(({ node }, i) => (
            <div key={i} className="w-full lg:w-1/2 px-4 lg:px-3 pb-4">
              <ArchiveItem post={node} />
            </div>
          ))}
      </InfiniteScroll>
    </div>
  );
};

BlogArchive.propTypes = {};

export default BlogArchive;
