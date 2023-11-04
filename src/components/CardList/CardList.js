import React from 'react'
import {} from './CardList.module.css'
import PropTypes from 'prop-types'

const CardList = ({ posts }) => {
  console.log(posts)
  return (
		<div>
			card
		</div>
  )
}

CardList.propTypes = {
  posts: PropTypes.array
}

export default CardList
