import { graphql } from 'gatsby';

export const ParagraphTextContentFragment = graphql`
  fragment ParagraphTextContentFragment on paragraph__text_content {
    __typename
    field_text_block {
      processed
    }
    field_title {
      processed
    }
    field_big_title
    field_full_width
    field_vertical_separator
  }
`
