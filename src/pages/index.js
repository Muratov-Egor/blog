import * as React from 'react'
import '../styles/global.css'
import SEO from '../components/SEO'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { graphql, Link } from 'gatsby'
import Preview from '../components/Preview/Preview'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import PostList from '../components/PostList/PostList'
import FishList from '../components/FishList/FishList'
const IndexPage = () => {
  const { t } = useTranslation('mainPage')
  return (
    <>
      <Header />
      <Preview />
      <main>
        <h1>{t('articlesTitle')}</h1>
        <PostList postCount={3} />
        <Link to={'/blog'} className={'button'}>
          {t('articleButton')}
        </Link>

        <h1>{t('fishTitle')}</h1>
        <FishList limit={6} />
        <Link to={'/fishbase'} className={'button'}>
          {t('fishButton')}
        </Link>
      </main>
       <Footer />
    </>
  )
}

export default IndexPage

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
export const Head = () => <SEO title="Главная" description={'Блок о дайвинге'} image={'https://i.pinimg.com/originals/f2/eb/22/f2eb2215e4d82727fb518e462393c1b0.png'}/>
