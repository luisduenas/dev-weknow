import { graphql } from 'gatsby';

export const ParagraphCtaFragment = graphql`
  fragment ParagraphCtaFragment on paragraph__cta {
    __typename
    field_cta_link {
      alias
    }
    field_download
    field_is_animated
    field_cta_size
    field_bg_color
    field_text {
      processed
    }
  }
`
