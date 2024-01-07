import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import SEO from '../components/SEO'

const NotFoundPage = () => {
  const { t } = useTranslation('404')
  return (
    <main className={'text-align-center'}>
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

export const Head = () => (
    <SEO title="404 Page not found" />
)
