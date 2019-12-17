import React from "react";
import { graphql  } from "gatsby"
import Layout from "../components/layout";
import SEO from "../components/seo";
import { componentResolver } from '../utils'

const  LandingTemplate = (props) =>  {

  const landing = props.data.landing;
  const noHero = landing.field_no_hero || false;
  const field_components = componentResolver(landing.relationships.field_components);

  return (
    <Layout noHero={noHero}>
      <SEO
        title={landing.title}
        keywords={[`drupal`, `staff augmentation`, `offshore`, 'weknowinc']}
        description={landing.field_meta_tags?landing.field_meta_tags.value.description:''}
        url={`${process.env.PROJECT_URL}${landing.path.alias}`}
      />

      {field_components && (
          field_components.map((item, i) => {
            return (
              <React.Fragment key={i}>
                {item}
              </React.Fragment>
            )
          })
      )}

    </Layout>
  );
}

export default LandingTemplate;

export const pageQuery = graphql`
  query landingBySlug($slug: String!) {
    landing: nodeLanding(path: {alias: {eq: $slug}}) {
      id
      title
      field_no_hero
      path {
        alias
      }
      field_meta_tags {
        value {
          description
          title
        }
      }
      relationships {
        field_components {
          ...ParagraphHeroFragment
          ...ParagraphJSXComponentFragment
          ...ParagraphGridCardFragment
          ...ParagraphTextContentFragment
          ...ParagraphPartnersFragment
          ...ParagraphCtaFragment
          ...ParagraphTwoImagesFragment
          ...ParagraphTextListFragment
          ...ParagraphHighlightedCareers
          ...ParagraphFeaturedQuotes
          ...ParagraphImageFragment
        }
      }
    }
  }
`
