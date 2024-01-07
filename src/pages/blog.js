import * as React from 'react'
import '../styles/global.css'
import { SEO } from '../components/SEO'
import Header from '../components/Header/Header'
import { graphql } from 'gatsby'
import Footer from '../components/Footer/Footer'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import PostList from '../components/PostList/PostList'
const BlogPage = () => {
  const { t } = useTranslation('blogPage')
  return (
    <>
      <Header />
      <main>
        <h1>{t('title')}</h1>
        <PostList />
      </main>
      <Footer />
    </>

  )
}

export default BlogPage

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

// todo разобраться как не хардкодить текст

export const Head = () => <SEO title="Блог" description={'Все статьи о дайвинге'} />
