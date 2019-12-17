import { graphql } from 'gatsby';

export const ParagraphTextListFragment = graphql`
  fragment ParagraphTextListFragment on paragraph__text_list {
    __typename
    field_title {
      processed
    }
    field_display
    relationships {
      field_simple_list_item {
        field_body {
          processed
        }
        field_title {
          processed
        }
      }
    }
  }
`
