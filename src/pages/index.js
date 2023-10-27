import * as React from 'react'
import { useI18next, useTranslation } from 'gatsby-plugin-react-i18next'
import { graphql } from 'gatsby'

const IndexPage = () => {
  const { t } = useTranslation()
  const { languages, changeLanguage } = useI18next()
  return (
    <main>
      hello
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
      <ul className="languages">
        {languages.map((lng) => (
          <li key={lng}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                changeLanguage(lng)
              }}>
              {lng}
            </a>
          </li>
        ))}
      </ul>
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
