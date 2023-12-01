import React from 'react'
import Image from '../../Image'
import PropTypes from 'prop-types'
import * as styles from './Card.module.css'
import { Link } from 'gatsby'

const Card = ({ post }) => {
  const { preview, title, slug, title_en } = post
  return (
		<Link to={`/fishbase/${slug}`} className={`flex flex-colum align-items-center ${styles.cardWrapper} ${styles.link}`} key={post.id}>
			<h1>{title}</h1>
			<Image
				src={preview}
				alt={title}
				className={styles.img}
			/>
			<span>{title_en}</span>
		</Link>
  )
}

Card.propTypes = {
  post: PropTypes.object.isRequired
}

export default Card
