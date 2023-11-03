/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: 'Divers Notes',
    siteUrl: 'https://diversnotes.com/'
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        // eslint-disable-next-line n/no-path-concat
        path: `${__dirname}/locales`,
        name: 'locale'
      }
    },
    {
      resolve: 'gatsby-plugin-react-i18next',
      options: {
        localeJsonSourceName: 'locale', // name given to `gatsby-source-filesystem` plugin.
        languages: ['ru', 'en'],
        defaultLanguage: 'ru',
        siteUrl: 'https://diversnotes.com',
        // if you are using trailingSlash gatsby config include it here, as well (the default is 'always')
        trailingSlash: 'always',
        // you can pass any i18next options
        i18nextOptions: {
          interpolation: {
            escapeValue: false // not needed for react as it escapes by default
          },
          debug: true,
          keySeparator: false,
          nsSeparator: false
        },
        pages: [
          {
            matchPath: '/:lang?/blog/:uid',
            getLanguageFromPath: true,
            excludeLanguages: ['ru', 'en']
          },
          {
            matchPath: '/preview',
            languages: ['ru']
          }
        ]
      }
    }
  ]
}
