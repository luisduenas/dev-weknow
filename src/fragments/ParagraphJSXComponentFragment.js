import { graphql } from 'gatsby';

export const ParagraphJSXComponentFragment = graphql`
  fragment ParagraphJSXComponentFragment on paragraph__jsx_component {
    __typename
    field_component
    field_text_block {
      processed
    }
    field_title {
      processed
    }
  }
`
