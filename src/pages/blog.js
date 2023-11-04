import * as React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import SEO from '../components/SEO'
import Header from '../components/Header/Header'
import CardList from '../components/CardList/CardList'

const BlogPage = ({ data }) => {
  const posts = data.allMdx.nodes
  return (
    <>
      <Header />
      <CardList posts={posts} />
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
    allMdx(sort: { frontmatter: { date: DESC }}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
          description
          preview
        }
        id
      }
    }
  }
`

BlogPage.propTypes = {
  data: PropTypes.object
}

export const Head = () => <SEO title="Блог" />

export default BlogPage
