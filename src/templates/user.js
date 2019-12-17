import React from "react";
import { graphql } from "gatsby"
import { Link } from 'gatsby';
import { FaFacebookF, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import Layout from "../components/layout";
import SEO from "../components/seo";
import TitleHero from '../components/title-hero';
import TextBlock from '../components/text-block';
import Cta from '../components/cta';
import Img from 'gatsby-image';


const PostMeta = ({ text }) => (
  <div className="flex text-2xl font-bold text-white justify-center items-center">
    {text}
  </div>
);

const UserTemplate = (props) => {

  let blogPost = null;
  const user = props.data.user;
  const facebook = user.field_facebook;
  const github = user.field_github;
  const linkedin = user.field_linkedin;
  const twitter = user.field_twitter;

  if (user.relationships.node__blog_post) {
    user.relationships.node__blog_post.sort(function (a, b) {
      return new Date(b.created) - new Date(a.created);
    });
    blogPost = user.relationships.node__blog_post.slice(0, 3);
  }

  return (
    <div >
      <Layout>
        <SEO
          title={user.field_full_name}
          keywords={[`weknowinc`, `drupal`, `team`]}
          description={`${user.field_full_name}, ${user.field_position}`}
          url={`${process.env.PROJECT_URL}${user.path.alias}`}
          image={user.relationships.field_avatar.relationships.field_media_image.localFile.childImageSharp.fluid.src}
        />
        <TitleHero
          title={user.field_full_name}
          image={user.relationships.field_cover.relationships.field_media_image.localFile.childImageSharp.fluid}
          gradient="#AF1F45"
          postMeta={
            <PostMeta
              text={user.field_position}
            />
          }
        />
        <div className=" container mx-auto">
          <div className="flex flex-wrap w-full" >
            <Img className="w-full lg:w-1/2" fluid={user.relationships.field_avatar.relationships.field_media_image.localFile.childImageSharp.fluid} />
            <div className="w-full lg:w-1/2">
              <TextBlock fullWidth bigTitle verticalSeparator title="Who am I?">
                {user.field_bio ? user.field_bio.processed : ``}
              </TextBlock>
              <div className="flex px-4">
                {
                  facebook &&
                  <a href={facebook.uri} target="_blank" rel="noopener noreferrer"> <FaFacebookF className="text-2xl m-2"/></a>
                }
                {
                  github &&
                  <a href={github.uri} target="_blank" rel="noopener noreferrer"><FaGithub className="text-2xl m-2"/></a>
                }
                {
                  linkedin &&
                  <a href={linkedin.uri} target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-2xl m-2"/></a>
                }
                {
                  twitter &&
                  <a href={twitter.uri} target="_blank" rel="noopener noreferrer"><FaTwitter className="text-2xl m-2"/></a>
                }
              </div>
              {
                blogPost && 
                <div className={`container mx-auto px-4 my-5 mb-3 text-2xl text-darker text-left font-serif`}>
                  <h2 className={`text-4xl md:text-6xl text-secondary mb-4 leading-tight`}>Recent articles</h2>
                  {blogPost.map((item, i) => {
                    const postDate = new Date(item.created);
                    const longMonth = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(postDate);

                    return (
                      <p key={item.path.alias} className="text-xl mb-3 font-thin"><Link to={item.path.alias}>{item.title}</Link> | <em>{longMonth} {postDate.getFullYear()}</em></p>
                    )
                  })}
                </div>
              }
            </div>
          </div>
        </div>

        <Cta link="/why-weknow" text={`<p>READ MORE ABOUT <span className="font-bold">WHY WEKNOW</span></p>`} color="primary" />
      </Layout>
    </div>
  );
}

export default UserTemplate;

export const pageQuery = graphql`
query usersBySlug($slug: String!) {
  user: userUser(name:{eq:$slug}) 
  {
    name
    path {
      alias
    }
    field_bio {
      processed
    }
    field_dc_maintainer
    field_facebook {
      title
      uri
    }
    field_full_name
    field_github {
      title
      uri
    }
    field_position
    field_linkedin {
      title
      uri
    }
    field_twitter {
      title
      uri
    }
    field_has_profile
    relationships {
      field_avatar {
        relationships {
          field_media_image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 480, maxHeight: 480, cropFocus: CENTER) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      field_cover {
        id
        relationships{
          field_media_image{
            localFile{
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      node__blog_post {
        title
        created
        path {
          alias
        }
      }
    }
  }
}`