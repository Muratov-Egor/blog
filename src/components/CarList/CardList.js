import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from '../Image'

const CardList = () => {
  const data = useStaticQuery(graphql`
    query {
	    allMdx(sort: { frontmatter: { date: DESC }}) {
	      nodes {
	        frontmatter {
	          date(formatString: "MMMM D, YYYY")
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
		<div>
			{posts.map(post => {
			  const { preview, title } = post.frontmatter
			  return (
					<div key={post.id}>
						<p>{title}</p>
						 <Image
						  src={preview}
						  className="mx-auto shadow-xl"
						  alt="Sunset Image"
						 />
					</div>
			  )
			})}
		</div>
  )
}

export default CardList
