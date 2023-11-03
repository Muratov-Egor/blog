import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import SEO from '../components/SEO'

const NotFoundPage = () => {
  const { t } = useTranslation('404')
  return (
    <main className={'page404'}>
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

export const Head = () => {
  return (
    <SEO title={'404. Страница не найдена'}
         description={'Блог о дайвинге и около того'}
         previewLink ={'https://i.pinimg.com/originals/c0/22/fc/c022fc54ca44c613ee935d1206b11af5.jpg'} />
  )
}
