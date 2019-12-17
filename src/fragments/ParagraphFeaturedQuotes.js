import { graphql } from 'gatsby';

export const ParagraphFeaturedQuotes = graphql`
  fragment ParagraphFeaturedQuotes on paragraph__featured_quotes {
    __typename
    field_link {
      alias: uri
    }
    field_body {
      processed
    }
    field_title {
      processed
    }
    relationships {
      field_quote_items {
        field_text_title
        field_body {
          processed
        }
      }
    }
  }
`
