import { graphql } from 'gatsby';

export const ParagraphImageFragment = graphql`
  fragment ParagraphImageFragment on paragraph__image {
    __typename
    relationships {
      field_image {
        relationships {
          field_media_image {
            localFile {
              childImageSharp {
                fluid(cropFocus: CENTER) {
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
