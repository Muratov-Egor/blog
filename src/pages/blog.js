import * as React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import SEO from '../components/SEO'
import Header from '../components/Header/Header'
import CardList from '../components/CarList/CardList'

const BlogPage = ({ data }) => {
  return (
    <>
       <Header />
        <h1 className={'text-align-center'}>Все статьи</h1>
       <CardList />
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

BlogPage.propTypes = {
  data: PropTypes.object
}

export const Head = () => <SEO title="Блог" />

export default BlogPage
