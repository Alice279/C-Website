/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Conflux`,
    description: `conflux website.`,
    author: `conflux`,
    siteUrl: `https://confluxnetwork.org`,
  },

  plugins: [
    /**
     * Eslint hot load
     */
    `gatsby-plugin-eslint`,

    /**
     * Less support
     */
    `gatsby-plugin-less`,

    /**
     * Helmet for SEO
     */
    `gatsby-plugin-react-helmet`,

    /**
     * Make all image file can query
     */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },

    /**
     * i18n
     */
    {
      // https://www.gatsbyjs.com/plugins/gatsby-plugin-react-i18next/
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        path: `${__dirname}/src/locales`,
        languages: [`en`, `zh`, `ko`, `ru`],
        // languages: [`en`, `zh`],
        defaultLanguage: `en`,

        // you can pass any i18next options
        // pass following options to allow message content as a key
        i18nextOptions: {
          lowerCaseLng: true,
          saveMissing: false,
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
          keySeparator: false,
          nsSeparator: false,
        },
        pages: [],
      },
    },

    /**
     * Manifest
     */
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Conflux Website`,
        short_name: `conflux`,
        start_url: `/`,
        background_color: `#7c426d`,
        theme_color: `#7c426d`,
        display: `standalone`,
        icon: `src/assets/images/logo-icon.png`, // This path is relative to the root of the site.
      },
    },

    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'UA-142778411-1', // Google Analytics / GA
        ],
      },
    },

    /**
     * Parses Markdown files using Remark.
     */
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {},
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
          // Adds syntax highlighting to code blocks in markdown files
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
        ],
      },
    },

    /**
     * Optimize images for production
     */
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    /**
     * Google Analytics
     */
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: 'UA-142778411-1',
    //   },
    // },

    /**
     * Baidu Tongji for production
     */
    // {
    //   resolve: 'gatsby-plugin-baidu-tongji',
    //   options: {
    //     siteid: '4dd121dde4ccc8928cb6ec5ea9b2f9ba',
    //     head: false,
    //   },
    // },

    /**
     * Create a sitemap
     */
    `gatsby-plugin-sitemap`,
  ],
}
