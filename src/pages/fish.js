import * as React from 'react'
import SEO from '../components/SEO'

import { graphql } from 'gatsby'
import FishList from '../components/FishList/FishList'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const Fish = () => {
  return <>
	  <Header />
	  <FishList />
	  <Footer />
  </>
}

export default Fish

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`

export const Head = () => {
  return (
		<SEO title={'База данных рыб'}/>
  )
}
