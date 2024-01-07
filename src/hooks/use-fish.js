import { graphql, useStaticQuery } from 'gatsby'

export const useFish = (limit) => {
  const data = useStaticQuery(graphql`
    query($limit: Int) {
	    allMdx(
	      sort: { frontmatter: { date: DESC }}
        filter: {fields: {source: {eq: "fish"}}}
        limit: $limit
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

  // todo разобраться как передавать лимит как variables в запрос
  const allPosts = data.allMdx.nodes
  const posts = limit ? allPosts.slice(0, limit) : allPosts

  return posts
}
