import * as React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const BlogPost = ({ data, children }) => {
  const { title, description, preview, date } = data.mdx.frontmatter

  return (
    <>
      <div>{title}</div>
      {children}
    </>
  )
}

export const query = graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date
        slug
        description
        preview
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
