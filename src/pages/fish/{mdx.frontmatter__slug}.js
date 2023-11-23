import * as React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import * as style from './article.module.css'

const FishPost = ({ data, children }) => {
  const { title } = data.mdx.frontmatter

  return (
    <>
      <article className={style.article}>
        <h1 className={style.title}>{title}</h1>
        {children}
      </article>
    </>
  )
}

export const query = graphql`
  query($id: String, $language: String!) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        slug
        description
        preview
        previewLink
      }
    }
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

FishPost.propTypes = {
  data: PropTypes.object,
  children: PropTypes.object
}

export default FishPost
