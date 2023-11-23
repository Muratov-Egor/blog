import * as React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import * as style from './article.module.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Image from '../../components/Image'

const FishPost = ({ data, children }) => {
  const { title, preview } = data.mdx.frontmatter

  return (
    <>
      <Header />
      <article className={style.article}>
        <h1 className={style.title}>{title}</h1>
        <Image
          src={preview}
          alt={title}
          className={style.img}
        />
        {children}
      </article>
      <Footer />
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
