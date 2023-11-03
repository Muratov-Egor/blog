import * as React from 'react'
import { Link } from 'gatsby'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import { logoWrapper, logo } from './Header.module.css'

const Header = () => {
  const { t } = useTranslation('mainPage')

  return (
		<header className={'flex flex-wrap justify-content-space-between align-items-center'}>
			<div className={`flex flex-wrap ${logoWrapper}`}>
				 <img src={'https://i.pinimg.com/originals/f2/eb/22/f2eb2215e4d82727fb518e462393c1b0.png'} className={logo} />
				<h1>{t('navbarHome1')}</h1>
			</div>
			<nav>
				<Link to={'/'}>{t('navbarHome1')}</Link>
				<Link to={'/'}>{t('navbarBlog1')}</Link>
				<Link to={'/'}>{t('navbarDatabase1')}</Link>
			</nav>
		</header>
  )
}

export default Header
