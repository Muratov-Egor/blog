import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as styles from './FishList.module.css'
import Card from './Card/Card'

const FishList = () => {
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

  return (
		<div className={`flex flex-wrap justify-content-center ${styles.cardListWrapper}`}>
			{allPosts.map(post => <Card key={post.id} post={post.frontmatter} />)}
		</div>
  )
}

export default FishList
