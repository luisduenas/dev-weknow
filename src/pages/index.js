import React from "react";
import { useStaticQuery, graphql  } from "gatsby"
import Layout from "../components/layout";
import SEO from "../components/seo";
import { componentResolver } from '../utils'

function IndexPage() {
  const { home } = useStaticQuery(
    graphql`
      query {
        home: nodeLanding(path: {alias: {eq: "/homepage"}}) {
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
              ...ParagraphImageSliderFragment
              ...ParagraphJSXComponentFragment
              ...ParagraphGridCardFragment
              ...ParagraphTextContentFragment
              ...ParagraphPartnersFragment
              ...ParagraphCtaFragment
            }
          }
        }
      }
    `
  )

  const field_components = componentResolver(home.relationships.field_components);

  return (
    <Layout>
      <SEO
        title={home.field_meta_tags.value.title}
        keywords={[`drupal`, `staff augmentation`, `offshore`, 'weknowinc']}
        description={home.field_meta_tags.value.description}
        url={`${process.env.PROJECT_URL}${home.path.alia}`}
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

export default IndexPage;
