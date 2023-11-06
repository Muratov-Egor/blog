import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as styles from './CardList.module.css'
import Card from './Card/Card'

const CardList = () => {
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

  const posts = data.allMdx.nodes

  return (
		<div className={`flex flex-wrap justify-content-space-between ${styles.cardListWrapper}`}>
			{posts.map(post => <Card key={post.id} post={post.frontmatter} />)}
		</div>
  )
}

export default CardList
