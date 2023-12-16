import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as styles from './FishList.module.css'
import Card from './Card/Card'
import PropTypes from 'prop-types'

const FishList = ({ limit }) => {
  const data = useStaticQuery(graphql`
    query {
	    allMdx(
	      sort: { frontmatter: { date: DESC }}
        filter: {fields: {source: {eq: "fish"}}}
      ) {
	      nodes {
	        frontmatter {
	          date
	          title
	          title_en
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
		<div className={`flex flex-wrap justify-content-center ${styles.cardListWrapper}`}>
			{posts.map(post => <Card key={post.id} post={post.frontmatter} />)}
		</div>
  )
}

FishList.propTypes = {
	limit: PropTypes.number
}

export default FishList
