import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { useTranslation } from 'gatsby-plugin-react-i18next'

const NotFoundPage = () => {
  const { t } = useTranslation('404')
  return (
    <main>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
      <Link to="/">{t('goHome')}</Link>
    </main>
  )
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`

export default NotFoundPage

export const Head = () => <title>{useTranslation().t('title')}</title>
