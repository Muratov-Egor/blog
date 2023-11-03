import * as React from 'react'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import { graphql } from 'gatsby'

const IndexPage = () => {
  const { t } = useTranslation()
  return (
    <main>
      hello
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
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

export default IndexPage

export const Head = () => <title>Home Page</title>
