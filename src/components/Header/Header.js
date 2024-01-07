import * as React from 'react'
import { Link } from 'gatsby'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import { logo } from '../Header/Header.module.css'

const Header = () => {
  const { t } = useTranslation('header')

  return (
		<header className={'flex flex-wrap'}>
			<Link to={'/'} className={`flex align-items-center ${logo}`}>
				<img src={'https://i.pinimg.com/originals/f2/eb/22/f2eb2215e4d82727fb518e462393c1b0.png'} alt={'logo'}/>
				<h1>{t('title')}</h1>
			</Link>
			<nav className={'flex flex-wrap align-items-center'}>
				<Link to={'/'}>{t('navbarHome')}</Link>
				<Link to={'/blog'}>{t('navbarBlog')}</Link>
				<Link to={'/fishbase'}>{t('navbarDatabase')}</Link>
			</nav>
		</header>
  )
}

export default Header
