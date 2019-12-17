import React from 'react';
import { graphql  } from "gatsby"
import Layout from "../components/layout";
import SEO from "../components/seo";
import TitleHero from '../components/title-hero';
import ArchiveItem from '../components/archive-item';
import Cta from '../components/cta';

const TagTemplate = (props) => {
  const {data:{tag, blogPage}} = props;
  const headerImage = blogPage.relationships.field_components[0];
  return (

    <Layout>
      <SEO
        title={tag.name}
        keywords={[`gatsby`, `tailwind`, `react`, 'weknowinc']}
        description={tag.name}
        url={`${process.env.PROJECT_URL}${tag.path.alias}`}
      />
      <TitleHero 
        title={tag.name}
        image={headerImage.relationships.field_background_image.relationships.field_media_image.localFile.childImageSharp.fluid}
      />
      <div className="container mx-auto md:flex flex-wrap pt-4 md:pt-6">
        {tag.relationships.node__blog_post && tag.relationships.node__blog_post.map((node, i)=>(
          <React.Fragment key={i}>
            <div className="w-full lg:w-1/2 px-4 lg:px-2 pb-4">
              <ArchiveItem post={node}  />
            </div>
          </React.Fragment>
        ))}
      </div>
      <Cta link="/contact" text="DON'T BE A STRANGER CONTACT US" color="primary" />
    </Layout>
    
  );
};

TagTemplate.propTypes = {
  
};

export default TagTemplate;

export const pageQuery = graphql`
  query tag($slug: String!) {
    tag:taxonomyTermTags(path: {alias: {eq: $slug}}) {
      id
      name
      path{
        alias
      }
      relationships {
        node__blog_post {
          title
          relationships {
            field_image {
              relationships {
                field_media_image {
                  localFile {
                    childImageSharp {
                      fluid {
                        src
                      }
                    }
                  }
                }
              }
            }
            uid {
              field_full_name
            }
          }
          field_resume
          path {
            alias
          }
          fields {
            markdownBody {
              childMarkdownRemark {
                html
                rawMarkdownBody
                excerpt
              }
            }
          }
          created(formatString: "MMM D, YYYY")
        }
      }
    }
    blogPage: nodeLanding(path: {alias: {eq: "/blog"}}) {
      id
      relationships {
        field_components {
          ... on paragraph__hero {
            id
            field_title {
              processed
            }
            relationships {
              field_background_image {
                relationships {
                  field_media_image {
                    localFile {
                      childImageSharp {
                        fluid {
                          src
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
  }
`