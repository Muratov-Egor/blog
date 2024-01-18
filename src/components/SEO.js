import React from 'react'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import PropTypes from 'prop-types'

const SEO = ({ title, description, image, pathname, children }) => {
  const { title: defaultTitle, description: defaultDescription, image: defaultImage, siteUrl } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: image || defaultImage,
    url: `${siteUrl}${pathname || ''}`
  }

  return (
		<>
			<title>{`${seo.title} | ${defaultTitle}`}</title>
			<meta charSet="utf-8"/>
			<meta name="viewport" content="width=device-width,initial-scale=1"/>
			<meta name="robots" content="index, follow"/>
			<meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
			<meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
			<meta name="description" content={seo.description} />
			<meta name="image" content={seo.image} />
			<meta name="twitter:card" content="summary_large_image" />🤿
			<meta name="twitter:title" content={seo.title} />
			<meta name="twitter:url" content={seo.url} />
			<meta name="twitter:description" content={seo.description} />
			<meta name="twitter:image" content={seo.image} />
			<meta name="twitter:creator" content={seo.twitterUsername} />
			<meta property="og:type" content="article" />
			<meta property="og:title" content={seo.title} />
			<meta property="og:description" content={seo.description} />
			<meta property="og:url" content={seo.url} />
			<meta property="og:site_name" content={seo.title} />
			<meta property="og:image" content={seo.image} />
			<meta property="og:image:alt" content={seo.title} />
			<link rel="icon" href="https://i.pinimg.com/originals/dd/6e/27/dd6e27bf96eebe1fb3de32b88bcb1558.png" />
			{children}
		</>
  )
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  children: PropTypes.any
}

export default SEO
