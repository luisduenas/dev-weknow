const dotenv = require('dotenv')

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `weKnow Inc`,
    description: `Software Development Company in Latin America – weKnow Inc`,
    author: `@weknowinc`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-tailwind`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#644B78`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`
      }
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: true,
        stripMetadata: true,
        defaultQuality: 75,
      },
    },
    // `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `@weknow/gatsby-remark-drupal`,
            options: {
              nodes: [`blog_post`, `case_study`]
            }
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              withWebp: true,
              maxWidth: 1024,
              linkImagesToOriginal: false,
              quality: 80,
            },
          },
        ],
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/style.css`]
      }
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        tables: [
          {
            baseId: `appvOaMxpbKUMxEhG`,
            tableName: `Statistics`,
            mapping: {
              icon: `fileNode`,
            }
          },
          {
            baseId: `appvOaMxpbKUMxEhG`,
            tableName: `Events`,
          },
          {
            baseId: `appvOaMxpbKUMxEhG`,
            tableName: `Presentations`,
            tableLinks: [`event`],
          },
          {
            baseId: `appvOaMxpbKUMxEhG`,
            tableName: `Contributions`,
          },
        ]
      }
    },
    {
      resolve: 'gatsby-source-drupal',
      options: {
        baseUrl: `${process.env.DRUPAL_HOST}`,
        apiBase: `api`,
        preview: true,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: process.env.GTM_ID,
        includeInDevelopment: true,
        defaultDataLayer: { platform: "gatsby" },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.TRACKING_ID,
        head: false,
        anonymize: true,
        respectDNT: true,
        pageTransitionDelay: 0,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: process.env.PROJECT_URL,
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: process.env.FACEBOOK_PIXEL_ID,
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: process.env.DISQUS_ID
      }
    },
    // `gatsby-plugin-offline`
  ]
};
