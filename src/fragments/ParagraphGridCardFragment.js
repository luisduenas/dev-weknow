import { graphql } from 'gatsby';

export const ParagraphGridCardFragment = graphql`
  fragment ParagraphGridCardFragment on paragraph__grid_card {
    __typename
    field_text_title
    relationships {
      field_card {
        field_body {
          processed
        }
        field_footer {
          processed
        }
        field_link {
          alias
        }
        field_subtitle
        field_text_color
        field_text_title
      }
    }
  }
`
