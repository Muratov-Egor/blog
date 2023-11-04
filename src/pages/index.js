import * as React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'
import '../styles/global.css'
import Header from '../components/Header/Header'
import Preview from '../components/Preview/Preview'

const IndexPage = () => {
  return (
    <>
      <Header />
      <Preview />
      <main>
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
