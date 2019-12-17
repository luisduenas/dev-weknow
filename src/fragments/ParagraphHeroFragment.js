import { graphql } from 'gatsby';

export const ParagraphHeroFragment = graphql`
  fragment ParagraphHeroFragment on paragraph__hero {
    __typename
    field_overlay_color
    field_title {
      processed
    }
    relationships {
      field_background_image {
        relationships {
          field_media_image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1440, maxHeight: 560, cropFocus: CENTER) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
