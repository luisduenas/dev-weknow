import { graphql } from 'gatsby';

export const ParagraphImageSliderFragment = graphql`
  fragment ParagraphImageSliderFragment on paragraph__image_slider {
    __typename
    relationships {
      field_slide {
        field_title {
          processed
        }
        field_cta_link {
          alias
          title
        }
        relationships {
          field_image {
            relationships {
              field_media_image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1440, maxHeight: 800, cropFocus: CENTER) {
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
`
