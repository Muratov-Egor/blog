import * as React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import * as style from './article.module.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Image from '../../components/Image'
import Date from '../../components/Date'

const BlogPost = ({ data, children }) => {
  const { title, preview, date } = data.mdx.frontmatter

  return (
    <>
      <Header />
      <article className={style.article}>
        <h1 className={style.title}>{title}</h1>
        <p className={style.date}><Date dateString={date} /></p>
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
        date
        slug
        description
        preview
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

BlogPost.propTypes = {
  data: PropTypes.object,
  children: PropTypes.object
}

export const Head = () => <title>dasd</title>

export default BlogPost
