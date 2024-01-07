import * as React from 'react'
import { card, img } from './PostCard.module.css'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Image from '../Image'
import Date from '../Date'

const PostCard = ({ post }) => {
  return (
    <Link to={`/blog/${post.slug}`} className={`${card} flex flex-colum align-items-center`}>
      <h2>{post.title}</h2>
      <Image
        src={post.preview}
        alt={post.description}
        className={img}
      />
      <p>{post.description}</p>
      <span><Date dateString={post.date} /></span>

    </Link>
  )
}

PostCard.propTypes = {
  post: PropTypes.object
}

export default PostCard
