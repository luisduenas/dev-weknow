import React from 'react';
import PropTypes from 'prop-types';
import { graphql  } from "gatsby"
import Layout from "../components/layout";
import SEO from "../components/seo";
import TitleHero from '../components/title-hero';
import Cta from '../components/cta';


const CaseStudyTemplate = props => {
  const {data:{caseStudy}} = props;
  
  return (
    <Layout>
      <SEO
        title={caseStudy.title}
        keywords={[`gatsby`, `tailwind`, `react`, 'weknowinc']}
        description={caseStudy.body.summary}
        url={`${process.env.PROJECT_URL}${caseStudy.path.alias}`}
      />
      <TitleHero 
        title={caseStudy.title}
        image={caseStudy.relationships.field_image.relationships.field_media_image.localFile.childImageSharp.fluid}
      />
      <div className="article container mx-auto py-3 px-4 lg:py-5 lg:px-6 leading-normal px-3 text-2xl font-serif text-darker font-thin">
        <div dangerouslySetInnerHTML={{ __html: caseStudy.fields.markdownBody.childMarkdownRemark.html }} />
      </div>
      <Cta link={caseStudy.relationships.field_cta.field_cta_link.alias} text={caseStudy.relationships.field_cta.field_text.processed} color="primary" />
    </Layout>
  );
};

CaseStudyTemplate.propTypes = {
  
};

export default CaseStudyTemplate;

export const pageQuery = graphql`
  query caseStudy($slug: String!) {
    caseStudy: nodeCaseStudy(path: {alias: {eq: $slug}}) {
      title
      path {
        alias
      }
      body {
        summary
      }
      fields {
        markdownBody {
          childMarkdownRemark {
            html
          }
        }
      }
      field_overlay_color
      relationships {
        field_cta {
          field_bg_color
          field_cta_link {
            alias
          }
          field_text {
            processed
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
      }
    }
  }
`