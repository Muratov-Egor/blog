import * as React from 'react'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'
import '../styles/global.css'
import Header from '../components/Header/Header'

const IndexPage = () => {
  const { t } = useTranslation('mainPage')
  return (
    <>
      <Header />
      <main>
        <h1>{t('title')}</h1>
        <p>{t('description')}</p>
      </main>
    </>
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

export const Head = () => {
  return (
    <SEO title={'Главная'}
         description={'Блог о дайвинге и около того'}
         previewLink ={'https://i.pinimg.com/originals/c0/22/fc/c022fc54ca44c613ee935d1206b11af5.jpg'} />
  )
}
