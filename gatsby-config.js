/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: 'Divers Notes',
    siteUrl: 'https://diversnotes.com/',
    description: 'Blog about scuba diving',
    image: '/logo.jpg'
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        // eslint-disable-next-line n/no-path-concat
        path: `${__dirname}/src/images/`
      }
    },
    'gatsby-plugin-mdx-source-name',
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        // eslint-disable-next-line n/no-path-concat
        path: `${__dirname}/locales`,
        name: 'locale'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        // eslint-disable-next-line n/no-path-concat
        path: `${__dirname}/blog`,
        name: 'blog'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        // eslint-disable-next-line n/no-path-concat
        path: `${__dirname}/fish`,
        name: 'fish'
      }
    },
    {
      resolve: 'gatsby-plugin-react-i18next',
      options: {
        localeJsonSourceName: 'locale', // name given to `gatsby-source-filesystem` plugin.
        languages: ['ru'],
        defaultLanguage: 'ru',
        siteUrl: 'https://diversnotes.com',
        // if you are using trailingSlash gatsby config include it here, as well (the default is 'always')
        trailingSlash: 'always',
        // you can pass any i18next options
        i18nextOptions: {
          interpolation: {
            escapeValue: false // not needed for react as it escapes by default
          },
          debug: false,
          keySeparator: false,
          nsSeparator: false
        },
        pages: [
          {
            matchPath: '/:lang?/blog/:uid',
            getLanguageFromPath: true,
            excludeLanguages: ['ru']
          },
          {
            matchPath: '/preview',
            languages: ['ru']
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'G-5G8B88DZ4P' // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: []
        }
      }
    }
  ]
}
