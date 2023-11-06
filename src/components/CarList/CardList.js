import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as styles from './CardList.module.css'
import Card from './Card/Card'
import PropTypes from 'prop-types'

const CardList = ({ limit }) => {
  const data = useStaticQuery(graphql`
    query {
	    allMdx(sort: { frontmatter: { date: DESC }}) {
	      nodes {
	        frontmatter {
	          date
	          title
	          slug
	          description
	          preview
	        }
	        id
	      }
	    }
	  }
	`)

  const allPosts = data.allMdx.nodes
  const posts = limit ? allPosts.slice(0, limit) : allPosts

  return (
		<div className={`flex flex-wrap justify-content-space-between ${styles.cardListWrapper}`}>
			{posts.map(post => <Card key={post.id} post={post.frontmatter} />)}
		</div>
  )
}

CardList.propTypes = {
  limit: PropTypes.number
}

export default CardList
