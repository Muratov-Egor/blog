import React from 'react'
import Image from '../../Image'
import PropTypes from 'prop-types'
import * as styles from './Card.module.css'
import Date from '../../Date'
import { Link } from 'gatsby'

const Card = ({ post }) => {
  const { preview, title, description, date, slug } = post
  return (
		<Link to={`/blog/${slug}`} className={`flex flex-colum align-items-center ${styles.cardWrapper} ${styles.link}`} key={post.id}>
			<h3>{title}</h3>
			<Image
				src={preview}
				alt={title}
				className={styles.img}
			/>
			<p>{description}</p>
			<span>
				<Date dateString={date} />
			</span>
		</Link>
  )
}

Card.propTypes = {
  post: PropTypes.object.isRequired
}

export default Card
