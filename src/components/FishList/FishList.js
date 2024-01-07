import React from 'react'
import * as styles from './FishList.module.css'
import Card from './Card/Card'
import PropTypes from 'prop-types'
import { useFish } from '../../hooks/use-fish'

const FishList = ({ limit }) => {
  const posts = useFish(limit)

  return (
		<div className={`flex flex-wrap  align-items-center justify-content-center ${styles.cardListWrapper}`}>
			{posts.map(post => <Card key={post.id} post={post.frontmatter} />)}
		</div>
  )
}

FishList.propTypes = {
  limit: PropTypes.number
}

export default FishList
