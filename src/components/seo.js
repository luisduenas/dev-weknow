import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import _isArray from 'lodash/isArray';

const config = {
  title: '',
  logo: '',
  url: '',
  twitter: '',
}

const getSchemaOrgJSONLD = ({
  isBlogPost,
  url,
  title,
  image,
  description,
  date,
  defaultTitle
}) => {
  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url,
      name: title,
      alternateName: defaultTitle,
    },
  ]

  return isBlogPost
    ? [
        ...schemaOrgJSONLD,
        {
          '@context': 'http://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              item: {
                '@id': url,
                name: title,
                image,
              },
            },
          ],
        },
        {
          '@context': 'http://schema.org',
          '@type': 'BlogPosting',
          url,
          name: title,
          alternateName: defaultTitle,
          headline: title,
          image: {
            '@type': 'ImageObject',
            url: image,
          },
          description,
          author: {
            '@type': 'Person',
            name: 'Jesus Manuel Olivas',
          },
          publisher: {
            '@type': 'Organization',
            url: url,
            logo: config.logo,
            name: 'Jesus Manuel Olivas',
          },
          mainEntityOfPage: {
            '@type': 'WebSite',
            '@id': config.url,
          },
          date,
        },
      ]
    : schemaOrgJSONLD
}

function SEO({ description, lang, meta, keywords, title, image, isBlogPost, url, date, twitter }) {
  const data = useStaticQuery(graphql`
    query DefaultSEOQuery {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `);

  const defaultTitle = data.site.siteMetadata.title;
  const metaDescription = description || data.site.siteMetadata.description;

  const schemaOrgJSONLD = getSchemaOrgJSONLD({
    isBlogPost,
    url,
    title,
    image,
    description,
    date,
    defaultTitle
  });

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={`%s | ${data.site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription
        }
      ]}
    >
    {/* General tags */}
    <meta name="image" content={image} />
    <meta name="keywords" content={_isArray(keywords)?keywords.join(', '):''} />
    {/* Schema.org tags */}
    <script type="application/ld+json">
      {JSON.stringify(schemaOrgJSONLD)}
    </script>
    {/* OpenGraph tags */}
    <meta property="og:url" content={url} />
    {isBlogPost ? <meta property="og:type" content="article" /> : <meta property="og:type" content="website" />}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />

    {/* Twitter Card tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:creator" content={twitter} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
    </Helmet>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: []
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  isBlogPost: PropTypes.bool,
  url: PropTypes.string.isRequired,
  twitter: PropTypes.string,
};

export default SEO;
