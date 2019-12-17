import { graphql } from 'gatsby';

export const ParagraphPartnersFragment = graphql`
  fragment ParagraphPartnersFragment on paragraph__partners {
    __typename
    relationships {
      field_partner_paragraph {
        relationships {
          field_logo {
            relationships {
              field_media_image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 180, maxHeight: 80, cropFocus: CENTER) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
        field_partner
        field_website {
          uri
          title
        }
      }
    }
  }
`
