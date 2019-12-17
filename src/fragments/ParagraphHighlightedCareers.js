import { graphql } from 'gatsby';

export const ParagraphHighlightedCareers = graphql`
  fragment ParagraphHighlightedCareers on paragraph__highlighted_careers {
    __typename
    field_body {
      processed
    }
    field_title {
      processed
    }
    relationships {
      field_career_item {
        field_text_title
        field_subtitle
        field_title {
          processed
        }
        relationships {
          field_career {
            path {
              alias
            }
          }
        }
      }
    }
  }
`
