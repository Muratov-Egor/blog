import React from 'react'
import Image from '../../Image'
import PropTypes from 'prop-types'
import * as styles from './Card.module.css'
import { Link } from 'gatsby'

const Card = ({ post }) => {
  const { preview, title, description, slug } = post
  return (
		<Link to={`/fish/${slug}`} className={`flex flex-colum align-items-center ${styles.cardWrapper} ${styles.link}`} key={post.id}>
			<h3>{title}</h3>
			<Image
				src={preview}
				alt={title}
				className={styles.img}
			/>
			<p>{description}</p>
		</Link>
  )
}

Card.propTypes = {
  post: PropTypes.object.isRequired
}

export default Card
