import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'

const SEO = ({ title, description, previewLink, url }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          siteUrl
        }
      }
    }
  `)

  const titleInfo = `${title} | ${data.site.siteMetadata.title}`
  const href = `${data.site.siteMetadata.siteUrl}${url}`
  const img = previewLink

  console.log(img)
  return (
    <>

      <meta charSet="utf-8"/>
      <meta name="viewport" content="width=device-width,initial-scale=1"/>
      <meta name="robots" content="index, follow"/>
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
      <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
      <title> {titleInfo} </title>
      <meta name="description" content={description}/>
      <link rel="canonical" href={href}/>
      <meta property="og:locale" content="ru_RU"/>
      <meta property="og:type" content="article"/>
      <meta property="og:title" content={titleInfo}/>
      <meta property="og:description" content={description}/>
      <meta property="og:url" content={href}/>
      <meta property="og:site_name" content={title}/>
      <meta property="og:image"
            content={img}/>
      <meta property="og:image:alt" content={titleInfo}/>
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:title" content={titleInfo}/>
      <meta name="twitter:description" content={description}/>
      <meta name="twitter:image"
            content={img}/>
      <meta name="twitter:image:alt" content={titleInfo}/>
      <link rel="icon" type="image/png" sizes="16x16"
            href="https://i.pinimg.com/originals/dd/6e/27/dd6e27bf96eebe1fb3de32b88bcb1558.png"/>
      <link rel="icon" type="image/png" sizes="32x32"
            href="https://i.pinimg.com/originals/dd/6e/27/dd6e27bf96eebe1fb3de32b88bcb1558.png"/>
      <link rel="icon" type="image/ico" sizes="48x48"
            href="https://i.pinimg.com/originals/dd/6e/27/dd6e27bf96eebe1fb3de32b88bcb1558.png"/>
      <link rel="apple-touch-icon" sizes="180x180"
            href="https://i.pinimg.com/originals/dd/6e/27/dd6e27bf96eebe1fb3de32b88bcb1558.png"/>
      <meta name="lang" content="ru"/>
    </>
  )
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  previewLink: PropTypes.string,
  url: PropTypes.string
}

export default SEO
