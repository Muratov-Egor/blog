import * as React from 'react'
import { useI18next } from 'gatsby-plugin-react-i18next'

const ChangeLanguage = () => {
  const { languages, changeLanguage } = useI18next()
  return (
		<ul className="languages">
			{languages.map((lng) => (
				<li key={lng}>
					<a
						href="#"
						onClick={(e) => {
						  e.preventDefault()
						  changeLanguage(lng)
						}}>
						{lng}
					</a>
				</li>
			))}
		</ul>
  )
}

export default ChangeLanguage
