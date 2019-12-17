import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from "gatsby"
import Layout from "../components/layout";
import SEO from "../components/seo";
import TitleHero from '../components/title-hero';
import Img from 'gatsby-image';
import ArticleItem from '../components/article-item';
import MarketingBanner from '../components/marketing-banner';
import Cta from '../components/cta';
import Disqus from '../components/disqus';
import ShareButtons from '../components/share-buttons';
import Tags from '../components/tags';


const PostMeta = ({ avatar, author, position, date }) => (
  <div className="flex flex-wrap text-xl font-thin text-white justify-center items-center ">
    <div className="rounded-full w-5 mr-3 overflow-hidden hidden lg:block">
      {avatar && (<Img fluid={avatar} alt="" className=" h-4" />)}
    </div>
    <div className="italic">
      By {author}  <span className="block md:inline">●  {position}</span> <span className="block md:inline">| {date}</span>
    </div>
  </div>
);

const Article = props => {
  const { data: { post } } = props;

  const author = post.relationships.uid

  const relatedPosts = post.relationships.field_related_post
  const tagsToMeta = post.relationships.field_tags.map((tag)=>tag.name);
  return (
    <Layout>
      <SEO
        title={post.title}
        keywords={[...tagsToMeta, 'weknowinc']}
        description={post.fields.markdownBody.childMarkdownRemark.excerpt}
        image={post.relationships.field_image.relationships.field_media_image.localFile.childImageSharp.fluid.src}
        isBlogPost
        date={post.created}
        url={`${process.env.PROJECT_URL}${post.path.alias}`}
        twitter={process.env.TWITTER_HANDLER}
      />
      <TitleHero
        title={post.title}
        image={post.relationships.field_image.relationships.field_media_image.localFile.childImageSharp.fluid}
        postMeta={
          <PostMeta
            avatar={author.relationships.field_avatar ? author.relationships.field_avatar.relationships.field_media_image.localFile.childImageSharp.fluid : null}
            author={author.field_full_name}
            position={author.field_position}
            date={post.created}
          />
        }
      />
      <div className="article container mx-auto py-3 px-4 lg:py-5 lg:px-6 leading-normal px-3 text-2xl font-serif text-darker font-thin">
        <div dangerouslySetInnerHTML={{ __html: post.fields.markdownBody.childMarkdownRemark.html }} />
      </div>
      <Tags tags={post.relationships.field_tags} />
      <ShareButtons url={`${process.env.PROJECT_URL}post.path.alias`} title={post.title} />
      {
        (relatedPosts.length > 0) &&
        <section>
          <h2 className="article container mx-auto px-3 font-serif text-darker text-4xl">Related Posts</h2>

          <div className="container mx-auto md:flex flex-wrap pt-4 md:pt-6">
            {
              relatedPosts.map((item, i) => {
                return (
                  <div key={i} className="w-full lg:w-1/3 px-4 lg:px-2 pb-4">
                    <ArticleItem post={item} />
                  </div>
                )
              })
            }
          </div>
        </section>
      }
      {
        post.relationships.field_marketing_cta &&
        <MarketingBanner
          info={post.relationships.field_marketing_cta.info}
          content={post.relationships.field_marketing_cta.body.processed}
          link={post.relationships.field_marketing_cta.field_link.alias}
          linkText={post.relationships.field_marketing_cta.field_link.title}
        />
      }
      <Disqus url={post.path.alias} identifier={post.path.alias} title={post.title} />
      <Cta link="/contact" text="DON'T BE A STRANGER CONTACT US" color="primary" />
    </Layout>
  );
};

Article.propTypes = {

};


export default Article;

export const pageQuery = graphql`
  query post($slug: String!) {
    post: nodeBlogPost(path: {alias: {eq: $slug}}) {
      id
      title
      path {  
        alias
      }
      field_resume
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
      relationships {
        uid {
          field_full_name
          field_position
          relationships {
            field_avatar {
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
        field_related_post {
          title
          created
          field_resume
          fields {
            markdownBody {
              childMarkdownRemark {
                html
                rawMarkdownBody
                excerpt
              }
            }
          }
          path{
            alias
          }
          relationships{
            uid{
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
        field_marketing_cta {
          body {
            processed
          }
          info
          field_overlay_color
          field_link {
            title
            uri
            alias
          }
        }
        field_tags {
          name
          path{
            alias
          }
        }
      }
    }
  }
`