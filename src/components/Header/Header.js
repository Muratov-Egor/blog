import * as React from 'react'
import {Link} from 'gatsby'
import {useTranslation} from 'gatsby-plugin-react-i18next'
import {logo, logoWrapper, navbar} from './Header.module.css'

const Header = () => {
  const { t } = useTranslation('header')

  return (
		<header className={'flex flex-wrap justify-content-space-between align-items-center'}>
			<Link to={'/'} className={`flex align-items-center ${logoWrapper}`}>
				<img src={'https://i.pinimg.com/originals/f2/eb/22/f2eb2215e4d82727fb518e462393c1b0.png'} className={logo} alt={'logo'}/>
				<h1>{t('title')}</h1>
			</Link>
			<nav className={`${navbar} flex flex-wrap `}>
				<Link to={'/'}>{t('navbarHome')}</Link>
				<Link to={'/blog'}>{t('navbarBlog')}</Link>
				<Link to={'/fish'}>{t('navbarDatabase')}</Link>
			</nav>
		</header>
  )
}

export default Header
