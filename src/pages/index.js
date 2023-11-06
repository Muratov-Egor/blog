import * as React from 'react'
import { graphql, Link } from 'gatsby'
import SEO from '../components/SEO'
import '../styles/global.css'
import Header from '../components/Header/Header'
import Preview from '../components/Preview/Preview'
import CardList from '../components/CarList/CardList'
import Footer from '../components/Footer/Footer'

const IndexPage = () => {
  return (
    <>
      <Header />
      <Preview />
      <main>
        <CardList limit={3} />
        <Link to={'/blog'} className={'button'}>
          Читать всё
        </Link>
      </main>
      <Footer />
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
