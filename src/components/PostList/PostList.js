import * as React from 'react'
import { usePosts } from '../../hooks/use-posts'
import PostCard from '../PostCard/PostCard'
import PropTypes from 'prop-types'

const PostList = ({ postCount }) => {
  const posts = usePosts(postCount)

  return (
		<div className={'flex flex-wrap align-items-center justify-content-space-between'}>
			{posts.map(post => <PostCard key={post.id} post={post.frontmatter} />)}
		</div>
  )
}

PostList.propTypes = {
  postCount: PropTypes.number
}

export default PostList
