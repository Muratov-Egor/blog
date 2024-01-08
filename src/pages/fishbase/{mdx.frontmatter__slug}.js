import * as React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import * as style from '../../styles/article.module.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Image from '../../components/Image'
import SEO from '../../components/SEO'

const FishPost = ({ data, children }) => {
  const { title, title_en, preview } = data.mdx.frontmatter

  return (
    <>
      <Header />
      <article className={style.article}>
        <h1 className={style.title}>{title}</h1>
        <span className={style.subtitle}>{title_en}</span>
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
        title_en
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

// eslint-disable-next-line react/prop-types
export const Head = ({ data }) => {
  // eslint-disable-next-line react/prop-types
  const { title, description, previewLink } = data.mdx.frontmatter

  return (
    <SEO title={title}
         description={description}
         image ={previewLink} />
  )
}

export default FishPost
