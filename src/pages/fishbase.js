import * as React from 'react'
import SEO from '../components/SEO'
import { graphql } from 'gatsby'
import FishList from '../components/FishList/FishList'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { useTranslation } from 'gatsby-plugin-react-i18next'

const Fishbase = () => {
  const { t } = useTranslation('fishBase')
  return <>
	  <Header />
	  <h1 className={'text-align-center'}>{t('title')}</h1>
	  <FishList />
	  <p className={'text-align-center'}>{t('bottom')}</p>
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
		     description={'База данных рыб которых я встретил за время погружения в Андаманском море.'}
		     image ={'https://raw.githubusercontent.com/Muratov-Egor/blog/master/src/images/databasepreview.png'}
		/>
  )
}
