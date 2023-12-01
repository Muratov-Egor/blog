import * as React from 'react'
import SEO from '../components/SEO'

import { graphql } from 'gatsby'
import FishList from '../components/FishList/FishList'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const Fishbase = () => {
  return <>
	  <Header />
	  <h1 className={'text-align-center'}>Все рыбы, которых я встречал</h1>
	  <FishList />
	  <p className={'text-align-center'}>Список дополняется...</p>
	  <Footer />
  </>
}

export default Fishbase

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
		<SEO title={'База данных рыб'}
		     description={'Список рыб которых я видел...'}
		     previewLink ={'https://raw.githubusercontent.com/Muratov-Egor/blog/master/src/images/databasepreview.png'}
		/>
  )
}
